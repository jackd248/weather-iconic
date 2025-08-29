import { readdir, readFile, writeFile, mkdir } from 'fs/promises'
import { join, basename, dirname } from 'path'
import { optimize } from 'svgo'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const sourceDir = join(rootDir, 'src/icons')
const outputDir = join(rootDir, 'src/icons')

// SVGO configuration for optimizing SVGs while preserving multi-color structure
const svgoConfig = {
  plugins: [
    'removeDoctype',
    'removeComments', 
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyText',
    // Keep groups for multi-color support - don't use 'removeEmptyContainers'
    'minifyStyles',
    'convertStyleToAttrs',
    'convertColors',
    'convertPathData',
    'convertTransform',
    'removeUselessStrokeAndFill',
    // Keep group attributes for multi-color theming
    // 'removeNonInheritableGroupAttrs',
    'removeViewBox',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['width', 'height', 'xmlns:xlink', 'version']
      }
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          { fill: 'currentColor' },
          { viewBox: '0 0 32 32' }
        ]
      }
    },
    // Add data attributes to groups for better multi-color support
    {
      name: 'addAttributesToGroups',
      fn: (ast) => {
        let groupIndex = 0
        const visit = (node) => {
          if (node.name === 'g') {
            if (!node.attributes) node.attributes = {}
            node.attributes['data-group'] = groupIndex.toString()
            groupIndex++
          }
          if (node.children) {
            node.children.forEach(visit)
          }
        }
        visit(ast)
        return ast
      }
    }
  ]
}

// Helper functions
const toPascalCase = (str) => {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

const toKebabCase = (str) => {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')
}

const extractPaths = (svgContent) => {
  const pathRegex = /<path[^>]*>/g
  const paths = svgContent.match(pathRegex) || []
  return paths.join('\n    ')
}

// Detect if SVG has multiple groups (multi-color support)
const hasMultipleGroups = (svgContent) => {
  const groupMatches = svgContent.match(/<g[^>]*>/g) || []
  return groupMatches.length > 1
}

// Extract group information for multi-color analysis
const analyzeGroups = (svgContent) => {
  const groups = []
  const groupRegex = /<g[^>]*>([\s\S]*?)<\/g>/g
  let match
  
  while ((match = groupRegex.exec(svgContent)) !== null) {
    const groupContent = match[1]
    const paths = (groupContent.match(/<path[^>]*>/g) || []).length
    groups.push({ paths })
  }
  
  return groups
}

async function processIcons() {
  console.log('🔄 Processing weather icons...')
  
  try {
    // Read all SVG files from source directory (src/icons already exists)
    const files = await readdir(sourceDir)
    const svgFiles = files.filter(file => file.endsWith('.svg'))
    
    console.log(`📁 Found ${svgFiles.length} SVG files`)
    
    const processedIcons = []
    
    for (const file of svgFiles) {
      const iconName = basename(file, '.svg')
      const filePath = join(sourceDir, file)
      
      console.log(`⚡ Processing ${iconName}...`)
      
      // Read existing SVG (already optimized)
      const svgContent = await readFile(filePath, 'utf-8')
      const paths = extractPaths(svgContent)
      
      // Analyze icon structure
      const isMultiColor = hasMultipleGroups(svgContent)
      const groups = analyzeGroups(svgContent)
      
      // Create icon data object
      const iconData = {
        name: iconName,
        pascalName: toPascalCase(iconName),
        kebabName: toKebabCase(iconName),
        svgContent,
        paths,
        size: svgContent.length,
        originalSize: svgContent.length,
        isMultiColor,
        groups: groups.length,
        groupData: groups
      }
      
      processedIcons.push(iconData)
    }
    
    // Generate icon metadata file
    const metadataPath = join(outputDir, 'metadata.json')
    const metadata = {
      icons: processedIcons.map(icon => ({
        name: icon.name,
        pascalName: icon.pascalName,
        kebabName: icon.kebabName,
        size: icon.size,
        originalSize: icon.originalSize,
        compression: "0.0",
        isMultiColor: icon.isMultiColor,
        groups: icon.groups,
        groupData: icon.groupData
      })),
      multiColorIcons: processedIcons.filter(icon => icon.isMultiColor).map(icon => icon.name),
      totalIcons: processedIcons.length,
      totalSize: processedIcons.reduce((sum, icon) => sum + icon.size, 0),
      totalOriginalSize: processedIcons.reduce((sum, icon) => sum + icon.size, 0),
      buildDate: new Date().toISOString()
    }
    
    await writeFile(metadataPath, JSON.stringify(metadata, null, 2))
    
    // Generate icon names export
    const iconNamesPath = join(outputDir, 'names.js')
    const iconNamesContent = `// Auto-generated icon names
export const iconNames = [
${processedIcons.map(icon => `  '${icon.name}'`).join(',\n')}
]

export const iconData = {
${processedIcons.map(icon => `  '${icon.name}': {
    name: '${icon.name}',
    pascalName: '${icon.pascalName}',
    kebabName: '${icon.kebabName}'
  }`).join(',\n')}
}
`
    
    await writeFile(iconNamesPath, iconNamesContent)
    
    console.log(`✅ Successfully processed ${processedIcons.length} icons`)
    console.log(`📊 Total icons size: ${metadata.totalSize} bytes`)
    console.log(`💾 Icons metadata saved to: ${outputDir}`)
    
    return processedIcons
    
  } catch (error) {
    console.error('❌ Error processing icons:', error)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  processIcons()
}

export { processIcons }