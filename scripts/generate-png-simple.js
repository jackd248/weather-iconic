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

async function generatePNGs() {
  console.log('🖼️  Generating PNG exports with Sharp...')
  
  try {
    // Create PNG directories
    await mkdir(pngDir, { recursive: true })
    for (const size of SIZES) {
      await mkdir(join(pngDir, `${size}px`), { recursive: true })
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
    }
    
    // Generate PNG manifest
    const manifest = {
      icons: iconNames,
      sizes: SIZES,
      totalFiles: results.length,
      totalSize: results.reduce((sum, r) => sum + r.bytes, 0),
      generatedAt: new Date().toISOString(),
      results: results.reduce((acc, result) => {
        if (!acc[result.icon]) acc[result.icon] = {}
        acc[result.icon][result.size] = {
          bytes: result.bytes,
          path: result.path.replace(rootDir, '.')
        }
        return acc
      }, {})
    }
    
    await writeFile(join(pngDir, 'manifest.json'), JSON.stringify(manifest, null, 2))
    
    // Generate PNG usage utilities
    const pngUtilsContent = `// Weather Iconic - PNG Utilities
export const PNG_SIZES = [${SIZES.join(', ')}]
export const PNG_ICONS = [${iconNames.map(name => `'${name}'`).join(', ')}]

export function getPNGPath(iconName, size = 24) {
  return \`./png/\${size}px/\${iconName}.png\`
}
`
    
    await writeFile(join(distDir, 'png-utils.js'), pngUtilsContent)
    
    console.log(`✅ Generated ${results.length} PNG files`)
    console.log(`📏 Sizes: ${SIZES.join('px, ')}px`)
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