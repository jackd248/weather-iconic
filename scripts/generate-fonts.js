import { generateFonts } from 'fantasticon'
import { readdir, mkdir, readFile, writeFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const iconsDir = join(rootDir, 'src/icons')
const distDir = join(rootDir, 'dist')
const fontsDir = join(distDir, 'fonts')

async function generateIconFonts() {
  console.log('🔤 Generating icon fonts...')
  
  try {
    // Create fonts directory
    await mkdir(fontsDir, { recursive: true })
    
    // Read icon metadata to get consistent naming
    const metadataPath = join(iconsDir, 'metadata.json')
    const metadata = JSON.parse(await readFile(metadataPath, 'utf-8'))
    const iconNames = metadata.icons.map(icon => icon.name)
    
    console.log(`📦 Generating fonts for ${iconNames.length} icons`)
    
    // Fantasticon configuration
    const config = {
      inputDir: iconsDir,
      outputDir: fontsDir,
      fontTypes: ['woff2', 'woff', 'ttf', 'eot'],
      assetTypes: ['css', 'json', 'html'],
      name: 'weather-iconic',
      prefix: 'weather',
      selector: '.weather',
      fontHeight: 1000,
      descent: 128,
      normalize: true,
      round: 10e12,
      pathOptions: {
        css: join(distDir, 'weather-iconic.css'),
        json: join(distDir, 'weather-iconic.json'),
        html: join(distDir, 'preview.html')
      },
      codepoints: generateCodepoints(iconNames),
      formatOptions: {
        woff: {
          metadata: 'Weather Iconic Font'
        },
        woff2: {
          metadata: 'Weather Iconic Font'
        }
      }
    }
    
    // Generate fonts
    const results = await generateFonts(config)
    
    // Fix font paths in generated CSS
    await fixFontPaths(join(distDir, 'weather-iconic.css'))
    
    // Generate enhanced CSS with modern features and multi-color support
    const enhancedCss = await generateEnhancedCSS(iconNames, results.codepoints)
    await writeFile(join(distDir, 'weather-iconic-enhanced.css'), enhancedCss)
    
    // Add multi-color support CSS
    const multiColorCss = await readFile(join(rootDir, 'src/multi-color-support.css'), 'utf-8')
    const combinedCss = enhancedCss + '\n\n' + multiColorCss
    await writeFile(join(distDir, 'weather-iconic-enhanced.css'), combinedCss)
    
    // Generate icon constants for programmatic use
    const iconConstants = generateIconConstants(iconNames, results.codepoints)
    await writeFile(join(distDir, 'icon-constants.js'), iconConstants)
    
    console.log(`✅ Generated fonts successfully`)
    console.log(`🔤 Font formats: ${config.fontTypes.join(', ')}`)
    console.log(`📁 Output directory: ${fontsDir}`)
    console.log(`📊 Font files: ${Object.keys(results.fontFiles || {}).length}`)
    
    return results
    
  } catch (error) {
    console.error('❌ Error generating fonts:', error)
    process.exit(1)
  }
}

// Generate consistent codepoints based on icon names
function generateCodepoints(iconNames) {
  const codepoints = {}
  let startCode = 0xe900
  
  iconNames.forEach((name, index) => {
    codepoints[name] = startCode + index
  })
  
  return codepoints
}

// Generate enhanced CSS with modern features
async function generateEnhancedCSS(iconNames, codepoints) {
  return `/* Weather Iconic - Enhanced CSS */
@font-face {
  font-family: 'weather-iconic';
  src: url('./fonts/weather-iconic.woff2') format('woff2'),
       url('./fonts/weather-iconic.woff') format('woff'),
       url('./fonts/weather-iconic.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

.weather-icon {
  /* Base icon styles */
  font-family: 'weather-iconic' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  
  /* Better Font Rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  /* Modern improvements */
  font-feature-settings: normal;
  font-variation-settings: normal;
}

/* Individual icon classes */
${iconNames.map(name => `.weather-${name}:before {
  content: "\\${codepoints[name].toString(16)}";
}`).join('\n')}

/* Size variations */
.weather-icon--xs { font-size: 1rem; }
.weather-icon--sm { font-size: 1.25rem; }
.weather-icon--md { font-size: 1.5rem; }
.weather-icon--lg { font-size: 2rem; }
.weather-icon--xl { font-size: 2.5rem; }
.weather-icon--2xl { font-size: 3.5rem; }
.weather-icon--3xl { font-size: 5rem; }

/* Animation utilities */
.weather-icon--spin {
  animation: weather-spin 2s linear infinite;
}

.weather-icon--pulse {
  animation: weather-pulse 2s ease-in-out infinite;
}

@keyframes weather-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes weather-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Color utilities */
.weather-icon--primary { color: #007bff; }
.weather-icon--secondary { color: #6c757d; }
.weather-icon--success { color: #28a745; }
.weather-icon--info { color: #17a2b8; }
.weather-icon--warning { color: #ffc107; }
.weather-icon--danger { color: #dc3545; }

`
}

// Generate JavaScript constants
function generateIconConstants(iconNames, codepoints) {
  return `// Weather Iconic - Icon Constants
export const WEATHER_ICONS = {
${iconNames.map(name => `  ${name.toUpperCase().replace(/-/g, '_')}: '${name}'`).join(',\n')}
}

export const WEATHER_CODEPOINTS = {
${iconNames.map(name => `  ${name.toUpperCase().replace(/-/g, '_')}: '\\u${codepoints[name].toString(16)}'`).join(',\n')}
}

export const WEATHER_UNICODE = {
${iconNames.map(name => `  '${name}': '\\u${codepoints[name].toString(16)}'`).join(',\n')}
}

// Utility functions
export function getWeatherIcon(name) {
  return WEATHER_UNICODE[name] || ''
}

export function getAllWeatherIcons() {
  return Object.keys(WEATHER_UNICODE)
}
`
}

// Fix font paths in generated CSS to use ./fonts/ prefix
async function fixFontPaths(cssFilePath) {
  try {
    let cssContent = await readFile(cssFilePath, 'utf-8')
    
    // Replace direct font file references with fonts/ subfolder
    cssContent = cssContent.replace(
      /url\("\.\/weather-iconic\.(woff2|woff|ttf|eot)([^"]*?)"\)/g,
      'url("./fonts/weather-iconic.$1$2")'
    )
    
    await writeFile(cssFilePath, cssContent)
    console.log('✅ Fixed font paths in CSS')
  } catch (error) {
    console.error('❌ Error fixing font paths:', error)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateIconFonts()
}

export { generateIconFonts }