import { readFile, writeFile, mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const iconsDir = join(rootDir, 'src/icons')
const reactDir = join(rootDir, 'src/react')
const vueDir = join(rootDir, 'src/vue')

// Helper functions
const toPascalCase = (str) => {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

const extractPaths = (svgContent) => {
  const pathRegex = /<path[^>]*>/g
  const paths = svgContent.match(pathRegex) || []
  return paths.join('\n    ')
}

// Generate React component
const generateReactComponent = (iconData) => {
  const { name, pascalName, optimizedSvg } = iconData
  const paths = extractPaths(optimizedSvg)
  
  return `import React from 'react'
import type { IconProps } from '../types'

export const Weather${pascalName} = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  className,
  style,
  title,
  ...props
}, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={color}
    className={className}
    style={style}
    role={title ? 'img' : 'presentation'}
    aria-hidden={title ? 'false' : 'true'}
    aria-label={title}
    {...props}
  >
    {title && <title>{title}</title>}
    ${paths}
  </svg>
))

Weather${pascalName}.displayName = 'Weather${pascalName}'
`
}

// Generate Vue component
const generateVueComponent = (iconData) => {
  const { name, pascalName, optimizedSvg } = iconData
  const paths = extractPaths(optimizedSvg)
  
  return `<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    :fill="color"
    :class="className"
    :style="style"
    :role="title ? 'img' : 'presentation'"
    :aria-hidden="title ? 'false' : 'true'"
    :aria-label="title"
    v-bind="$attrs"
  >
    <title v-if="title">{{ title }}</title>
    ${paths}
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: number | string
  color?: string
  className?: string
  style?: Record<string, any>
  title?: string
}

withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor'
})
</script>
`
}

// Generate React index file
const generateReactIndex = (iconNames) => {
  const imports = iconNames.map(name => {
    const pascalName = toPascalCase(name)
    return `import { Weather${pascalName} } from './Weather${pascalName}'`
  }).join('\n')
  
  const exports = iconNames.map(name => {
    const pascalName = toPascalCase(name)
    return `export { Weather${pascalName} }`
  }).join('\n')
  
  return `// Auto-generated React components
export * from '../types'

${imports}

${exports}

// Icon mapping for dynamic imports
export const iconComponents = {
${iconNames.map(name => {
    const pascalName = toPascalCase(name)
    return `  '${name}': Weather${pascalName}`
  }).join(',\n')}
} as const
`
}

// Generate Vue index file  
const generateVueIndex = (iconNames) => {
  const imports = iconNames.map(name => {
    const pascalName = toPascalCase(name)
    return `import Weather${pascalName} from './Weather${pascalName}.vue'`
  }).join('\n')
  
  const exports = iconNames.map(name => {
    const pascalName = toPascalCase(name)
    return `export { Weather${pascalName} }`
  }).join('\n')
  
  return `// Auto-generated Vue components
export * from '../types'

${imports}

${exports}

// Icon mapping for dynamic imports
export const iconComponents = {
${iconNames.map(name => {
    const pascalName = toPascalCase(name)
    return `  '${name}': Weather${pascalName}`
  }).join(',\n')}
} as const
`
}

async function generateComponents() {
  console.log('🔄 Generating framework components...')
  
  try {
    // Read icon metadata
    const metadataPath = join(iconsDir, 'metadata.json')
    const metadata = JSON.parse(await readFile(metadataPath, 'utf-8'))
    const iconNames = metadata.icons.map(icon => icon.name)
    
    console.log(`📦 Generating components for ${iconNames.length} icons`)
    
    // Create output directories
    await mkdir(reactDir, { recursive: true })
    await mkdir(vueDir, { recursive: true })
    
    // Process each icon
    for (const iconName of iconNames) {
      const pascalName = toPascalCase(iconName)
      
      // Read optimized SVG
      const svgPath = join(iconsDir, `${iconName}.svg`)
      const optimizedSvg = await readFile(svgPath, 'utf-8')
      
      const iconData = {
        name: iconName,
        pascalName,
        optimizedSvg
      }
      
      console.log(`⚛️  Generating React component for ${iconName}...`)
      
      // Generate React component
      const reactComponent = generateReactComponent(iconData)
      const reactComponentPath = join(reactDir, `Weather${pascalName}.tsx`)
      await writeFile(reactComponentPath, reactComponent)
      
      console.log(`🟢 Generating Vue component for ${iconName}...`)
      
      // Generate Vue component
      const vueComponent = generateVueComponent(iconData)
      const vueComponentPath = join(vueDir, `Weather${pascalName}.vue`)
      await writeFile(vueComponentPath, vueComponent)
    }
    
    // Generate index files
    console.log('📄 Generating index files...')
    
    const reactIndex = generateReactIndex(iconNames)
    await writeFile(join(reactDir, 'index.ts'), reactIndex)
    
    const vueIndex = generateVueIndex(iconNames)
    await writeFile(join(vueDir, 'index.ts'), vueIndex)
    
    console.log(`✅ Successfully generated ${iconNames.length * 2} components`)
    console.log(`⚛️  React components: ${reactDir}`)
    console.log(`🟢 Vue components: ${vueDir}`)
    
    return { iconNames, totalComponents: iconNames.length * 2 }
    
  } catch (error) {
    console.error('❌ Error generating components:', error)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateComponents()
}

export { generateComponents }