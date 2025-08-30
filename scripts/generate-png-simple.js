import sharp from 'sharp'
import { readdir, readFile, writeFile, mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const iconsDir = join(rootDir, 'src/icons')
const distDir = join(rootDir, 'dist')
const pngDir = join(distDir, 'png')

// PNG export sizes
const SIZES = [16, 24, 32, 48, 64, 128]

// Multi-color configuration for 48px variants
const MULTI_COLOR_CONFIGS = [
  {
    suffix: '-teal-gray',
    primaryColor: '#80BBB2',
    secondaryColor: '#666666',
    label: 'Teal Primary, Gray Secondary'
  }
]

function applyMultiColorToSVG(svgContent, primaryColor, secondaryColor) {
  // Replace the SVG content to apply colors to the first and second path
  let modifiedSvg = svgContent
  
  // Find all path elements and apply colors
  const pathRegex = /<path\s+([^>]*?)>/g
  const pathMatches = svgContent.match(pathRegex) || []
  const totalPaths = pathMatches.length
  let pathCount = 0
  
  modifiedSvg = modifiedSvg.replace(pathRegex, (match, attributes) => {
    pathCount++
    
    // Remove any existing fill attribute
    attributes = attributes.replace(/\s*fill="[^"]*"/g, '')
    
    // For single path icons, use secondary color (base)
    // For multi-path icons, use primary for first path (highlight), secondary for others (base)
    const color = (totalPaths === 1) ? secondaryColor : (pathCount === 1 ? primaryColor : secondaryColor)
    return `<path fill="${color}" ${attributes}>`
  })
  
  return modifiedSvg
}

async function generatePNGs() {
  console.log('🖼️  Generating PNG exports with Sharp...')
  
  try {
    // Create PNG directories
    await mkdir(pngDir, { recursive: true })
    for (const size of SIZES) {
      await mkdir(join(pngDir, `${size}px`), { recursive: true })
    }
    // Create multi-color directory for 48px
    await mkdir(join(pngDir, '48px-multi-color'), { recursive: true })
    
    // Read icon metadata
    const metadataPath = join(iconsDir, 'metadata.json')
    const metadata = JSON.parse(await readFile(metadataPath, 'utf-8'))
    const iconNames = metadata.icons.map(icon => icon.name)
    
    console.log(`📦 Generating PNGs for ${iconNames.length} icons in ${SIZES.length} sizes`)
    
    const results = []
    
    for (const iconName of iconNames) {
      console.log(`🎨 Processing ${iconName}...`)
      
      // Read optimized SVG
      const svgPath = join(iconsDir, `${iconName}.svg`)
      const svgContent = await readFile(svgPath, 'utf-8')
      
      // Generate PNGs for all sizes
      for (const size of SIZES) {
        const outputPath = join(pngDir, `${size}px`, `${iconName}.png`)
        
        try {
          // Convert SVG to PNG using Sharp
          const pngBuffer = await sharp(Buffer.from(svgContent))
            .resize(size, size)
            .png({
              quality: 95,
              compressionLevel: 9,
              adaptiveFiltering: true
            })
            .toBuffer()
          
          await writeFile(outputPath, pngBuffer)
          
          results.push({
            icon: iconName,
            size: `${size}px`,
            path: outputPath,
            bytes: pngBuffer.length
          })
          
        } catch (error) {
          console.warn(`⚠️  Failed to generate ${iconName} at ${size}px:`, error.message)
        }
      }
      
      // Generate multi-color variants at 48px
      console.log(`🌈 Generating multi-color variants for ${iconName} at 48px...`)
      for (const config of MULTI_COLOR_CONFIGS) {
        const multiColorSvg = applyMultiColorToSVG(svgContent, config.primaryColor, config.secondaryColor)
        const outputPath = join(pngDir, '48px-multi-color', `${iconName}${config.suffix}.png`)
        
        try {
          const pngBuffer = await sharp(Buffer.from(multiColorSvg))
            .resize(48, 48)
            .png({
              quality: 95,
              compressionLevel: 9,
              adaptiveFiltering: true
            })
            .toBuffer()
          
          await writeFile(outputPath, pngBuffer)
          
          results.push({
            icon: iconName,
            size: '48px-multi-color',
            variant: config.suffix,
            path: outputPath,
            bytes: pngBuffer.length,
            colors: {
              primary: config.primaryColor,
              secondary: config.secondaryColor
            }
          })
          
        } catch (error) {
          console.warn(`⚠️  Failed to generate multi-color ${iconName}${config.suffix} at 48px:`, error.message)
        }
      }
    }
    
    // Generate PNG manifest
    const standardResults = results.filter(r => !r.variant)
    const multiColorResults = results.filter(r => r.variant)
    
    const manifest = {
      icons: iconNames,
      sizes: SIZES,
      multiColorConfigs: MULTI_COLOR_CONFIGS,
      totalFiles: results.length,
      totalSize: results.reduce((sum, r) => sum + r.bytes, 0),
      generatedAt: new Date().toISOString(),
      standard: standardResults.reduce((acc, result) => {
        if (!acc[result.icon]) acc[result.icon] = {}
        acc[result.icon][result.size] = {
          bytes: result.bytes,
          path: result.path.replace(rootDir, '.')
        }
        return acc
      }, {}),
      multiColor: multiColorResults.reduce((acc, result) => {
        if (!acc[result.icon]) acc[result.icon] = {}
        acc[result.icon][result.variant] = {
          bytes: result.bytes,
          path: result.path.replace(rootDir, '.'),
          colors: result.colors
        }
        return acc
      }, {})
    }
    
    await writeFile(join(pngDir, 'manifest.json'), JSON.stringify(manifest, null, 2))
    
    // Generate PNG usage utilities
    const pngUtilsContent = `// Weather Iconic - PNG Utilities
export const PNG_SIZES = [${SIZES.join(', ')}]
export const PNG_ICONS = [${iconNames.map(name => `'${name}'`).join(', ')}]
export const MULTI_COLOR_VARIANTS = [${MULTI_COLOR_CONFIGS.map(c => `'${c.suffix}'`).join(', ')}]

export function getPNGPath(iconName, size = 24) {
  return \`./png/\${size}px/\${iconName}.png\`
}

export function getMultiColorPNGPath(iconName, variant = '-teal-gray') {
  return \`./png/48px-multi-color/\${iconName}\${variant}.png\`
}

export function getAvailableMultiColorVariants() {
  return ${JSON.stringify(MULTI_COLOR_CONFIGS, null, 2)}
}
`
    
    await writeFile(join(distDir, 'png-utils.js'), pngUtilsContent)
    
    console.log(`✅ Generated ${results.length} PNG files`)
    console.log(`📏 Standard sizes: ${SIZES.join('px, ')}px`)
    console.log(`🌈 Multi-color variants: ${multiColorResults.length} files at 48px`)
    console.log(`💾 Total PNG size: ${Math.round(manifest.totalSize / 1024)}KB`)
    console.log(`📁 Output directory: ${pngDir}`)
    
    return manifest
    
  } catch (error) {
    console.error('❌ Error generating PNGs:', error)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generatePNGs()
}

export { generatePNGs }