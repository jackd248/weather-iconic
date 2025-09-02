import sharp from 'sharp'
import { readdir, readFile, writeFile, mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const iconsDir = join(rootDir, 'src/icons')
const distDir = join(rootDir, 'dist')
const pngDir = join(distDir, 'png')

// PNG export sizes (removed 16px and 24px - too small for meaningful display)
const SIZES = [32, 48, 64, 128]

// Color configurations for all sizes
const COLOR_CONFIGS = [
  {
    suffix: '-black',
    primaryColor: '#000000',
    secondaryColor: '#000000',
    label: 'Black'
  },
  {
    suffix: '-white',
    primaryColor: '#ffffff',
    secondaryColor: '#ffffff',
    label: 'White'
  },
  {
    suffix: '-teal-gray',
    primaryColor: '#80BBB2',
    secondaryColor: '#666666',
    label: 'Multi-Color (Teal/Gray)'
  }
]

function applyColorsToSVG(svgContent, primaryColor, secondaryColor) {
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
    // Create PNG directories for all sizes and color variants
    await mkdir(pngDir, { recursive: true })
    for (const size of SIZES) {
      for (const config of COLOR_CONFIGS) {
        await mkdir(join(pngDir, `${size}px${config.suffix}`), { recursive: true })
      }
    }
    
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
      
      // Generate PNGs for all sizes and color variants
      for (const size of SIZES) {
        for (const config of COLOR_CONFIGS) {
          const coloredSvg = applyColorsToSVG(svgContent, config.primaryColor, config.secondaryColor)
          const outputPath = join(pngDir, `${size}px${config.suffix}`, `${iconName}.png`)
          
          try {
            // Convert SVG to PNG using Sharp
            const pngBuffer = await sharp(Buffer.from(coloredSvg))
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
              variant: config.suffix,
              path: outputPath,
              bytes: pngBuffer.length,
              colors: {
                primary: config.primaryColor,
                secondary: config.secondaryColor
              }
            })
            
          } catch (error) {
            console.warn(`⚠️  Failed to generate ${iconName}${config.suffix} at ${size}px:`, error.message)
          }
        }
      }
    }
    
    // Generate PNG manifest
    
    const manifest = {
      icons: iconNames,
      sizes: SIZES,
      colorConfigs: COLOR_CONFIGS,
      totalFiles: results.length,
      totalSize: results.reduce((sum, r) => sum + r.bytes, 0),
      generatedAt: new Date().toISOString(),
      variants: results.reduce((acc, result) => {
        if (!acc[result.icon]) acc[result.icon] = {}
        if (!acc[result.icon][result.size]) acc[result.icon][result.size] = {}
        acc[result.icon][result.size][result.variant] = {
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
export const COLOR_VARIANTS = [${COLOR_CONFIGS.map(c => `'${c.suffix}'`).join(', ')}]

export function getPNGPath(iconName, size = 32, variant = '-black') {
  return \`./png/\${size}px\${variant}/\${iconName}.png\`
}

export function getAvailableColorVariants() {
  return ${JSON.stringify(COLOR_CONFIGS, null, 2)}
}
`
    
    await writeFile(join(distDir, 'png-utils.js'), pngUtilsContent)
    
    console.log(`✅ Generated ${results.length} PNG files`)
    console.log(`📏 Sizes: ${SIZES.join('px, ')}px`)
    console.log(`🎨 Color variants: ${COLOR_CONFIGS.map(c => c.label).join(', ')}`)
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