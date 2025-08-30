import { readFile, writeFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const iconsDir = join(rootDir, 'src/icons')
const typesPath = join(rootDir, 'src/types.ts')

// Helper functions
const toPascalCase = (str) => {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

async function generateTypes() {
  console.log('📝 Generating TypeScript definitions...')
  
  try {
    // Read icon metadata
    const metadataPath = join(iconsDir, 'metadata.json')
    const metadata = JSON.parse(await readFile(metadataPath, 'utf-8'))
    const iconNames = metadata.icons.map(icon => icon.name)
    
    console.log(`🏷️  Generating types for ${iconNames.length} icons`)
    
    // Read current types file
    let typesContent = await readFile(typesPath, 'utf-8')
    
    // Generate new IconName type
    const iconNameType = iconNames.map(name => `  | '${name}'`).join('\n')
    const newIconNameDeclaration = `export type IconName = \n${iconNameType}`
    
    // Replace the IconName type in the existing file
    typesContent = typesContent.replace(
      /export type IconName = [^}]*}/s,
      newIconNameDeclaration
    )
    
    // Write updated types file
    await writeFile(typesPath, typesContent)
    
    console.log('✅ TypeScript definitions generated successfully')
    console.log(`🏷️  Updated main types: ${typesPath}`)
    
    return { iconNames, totalTypes: iconNames.length }
    
  } catch (error) {
    console.error('❌ Error generating types:', error)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateTypes()
}

export { generateTypes }