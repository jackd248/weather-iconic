// Main entry point for weather-iconic
export * from './types'

// Re-export icon names and utilities from generated files
export { iconNames, iconData } from './icons/names.js'

// CSS utilities
export const weatherIconicCSS = `
/* Weather Iconic Base Styles */
.weather-icon {
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
}

.weather-icon--interactive {
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
}

.weather-icon--interactive:hover {
  opacity: 0.8;
}

.weather-icon--spinning {
  animation: weather-icon-spin 2s linear infinite;
}

.weather-icon--pulse {
  animation: weather-icon-pulse 2s ease-in-out infinite;
}

@keyframes weather-icon-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes weather-icon-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
`

// Utility function to get icon by name (for dynamic usage)
export const getIconName = (name: string): string => {
  return name.toLowerCase().replace(/_/g, '-')
}

// Utility function to format icon names
export const formatIconName = (name: string): string => {
  return name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}