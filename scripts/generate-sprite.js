import { readFile, writeFile, mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const iconsDir = join(rootDir, 'src/icons')
const distDir = join(rootDir, 'dist')

// Helper function to extract SVG content without the SVG wrapper
const extractSvgContent = (svgContent) => {
  const contentMatch = svgContent.match(/<svg[^>]*>(.*)<\/svg>/s)
  return contentMatch ? contentMatch[1].trim() : ''
}

async function generateSprite() {
  console.log('🖼️  Generating SVG sprite...')
  
  try {
    // Create dist directory
    await mkdir(distDir, { recursive: true })
    
    // Read icon metadata
    const metadataPath = join(iconsDir, 'metadata.json')
    const metadata = JSON.parse(await readFile(metadataPath, 'utf-8'))
    const iconNames = metadata.icons.map(icon => icon.name)
    
    console.log(`📦 Creating sprite with ${iconNames.length} icons`)
    
    // Generate sprite symbols
    const symbols = []
    
    for (const iconName of iconNames) {
      const svgPath = join(iconsDir, `${iconName}.svg`)
      const svgContent = await readFile(svgPath, 'utf-8')
      const innerContent = extractSvgContent(svgContent)
      
      const symbol = `  <symbol id="weather-${iconName}" viewBox="0 0 32 32">
    ${innerContent}
  </symbol>`
      
      symbols.push(symbol)
    }
    
    // Generate complete sprite
    const spriteContent = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
${symbols.join('\n')}
</svg>`
    
    // Write sprite file
    const spritePath = join(distDir, 'sprites.svg')
    await writeFile(spritePath, spriteContent)
    
    // Generate sprite usage utilities
    const spriteUtilsContent = `import React from 'react'

// Auto-generated sprite utilities
export interface SpriteIconProps {
  name: string
  size?: number | string
  color?: string
  className?: string
  style?: React.CSSProperties
  title?: string
}

// React component for using sprite icons
export const SpriteIcon: React.FC<SpriteIconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  className,
  style,
  title,
  ...props
}) => {
  return React.createElement('svg', {
    width: size,
    height: size,
    fill: color,
    className,
    style,
    role: title ? 'img' : 'presentation',
    'aria-hidden': title ? 'false' : 'true',
    'aria-label': title,
    ...props
  }, [
    title && React.createElement('title', { key: 'title' }, title),
    React.createElement('use', { 
      key: 'use', 
      href: \`#weather-\${name}\`
    })
  ].filter(Boolean))
}

// Available sprite icon names
export const spriteIconNames = [
${iconNames.map(name => `  '${name}'`).join(',\n')}
] as const

export type SpriteIconName = typeof spriteIconNames[number]

// Utility to load sprite into DOM
export const loadSprite = async (spriteUrl = '/sprites.svg') => {
  try {
    const response = await fetch(spriteUrl)
    const svgText = await response.text()
    
    // Insert sprite into DOM if not already present
    if (!document.getElementById('weather-sprite')) {
      const div = document.createElement('div')
      div.id = 'weather-sprite'
      div.innerHTML = svgText
      document.body.insertBefore(div, document.body.firstChild)
    }
  } catch (error) {
    console.warn('Failed to load weather icon sprite:', error)
  }
}
`
    
    const spriteUtilsPath = join(rootDir, 'src/sprite.ts')
    await writeFile(spriteUtilsPath, spriteUtilsContent)
    
    // Generate CSS for sprite usage
    const spriteCssContent = `/* Weather Iconic Sprite CSS */
.weather-sprite-container {
  display: none;
}

.weather-sprite-icon {
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
}

/* Individual sprite classes for CSS-only usage */
${iconNames.map(name => `.weather-sprite-${name} {
  background-image: url('#weather-${name}');
}`).join('\n')}
`
    
    const spriteCssPath = join(distDir, 'sprites.css')
    await writeFile(spriteCssPath, spriteCssContent)
    
    console.log(`✅ Generated SVG sprite with ${iconNames.length} icons`)
    console.log(`🖼️  Sprite file: ${spritePath}`)
    console.log(`📄 Sprite utilities: ${spriteUtilsPath}`)
    console.log(`🎨 Sprite CSS: ${spriteCssPath}`)
    console.log(`📊 Sprite size: ${Buffer.byteLength(spriteContent, 'utf8')} bytes`)
    
    return { 
      iconCount: iconNames.length, 
      spriteSize: Buffer.byteLength(spriteContent, 'utf8'),
      spritePath 
    }
    
  } catch (error) {
    console.error('❌ Error generating sprite:', error)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSprite()
}

export { generateSprite }