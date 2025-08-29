import React from 'react'

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
      href: `#weather-${name}`
    })
  ].filter(Boolean))
}

// Available sprite icon names
export const spriteIconNames = [
  'barometer',
  'celsius',
  'cloud-down',
  'cloud-fog',
  'cloud-rain-single',
  'cloud-rain',
  'cloud-snow-single',
  'cloud-snow',
  'cloud-up',
  'cloud-wind',
  'cloud',
  'clouds',
  'compass-east',
  'compass-north-east',
  'compass-north-west',
  'compass-north',
  'compass-south-east',
  'compass-south-west',
  'compass-south',
  'compass-west',
  'compass',
  'fahrenheit',
  'fog',
  'hail',
  'lightning',
  'moon-cloud-lightning',
  'moon-cloud-rain',
  'moon-cloud-snow',
  'moon-cloud-wind',
  'moon-cloud',
  'moon-first-quarter',
  'moon-fog',
  'moon-fullmoon',
  'moon-last-quarter',
  'moon-newmoon',
  'moon-waning-crescent',
  'moon-waning-gibbous',
  'moon-waxing-crescent',
  'moon-waxing-gibbous',
  'moon',
  'rainbow',
  'raindrop',
  'refresh',
  'snowflake',
  'sun-cloud-lightning',
  'sun-cloud-rain',
  'sun-cloud-snow',
  'sun-cloud-wind',
  'sun-cloud',
  'sun-fog',
  'sun-low',
  'sun-medium',
  'sun',
  'sunrise',
  'sunset',
  'thermometer-cold',
  'thermometer-hot',
  'thermometer-medium',
  'tornado',
  'umbrella',
  'wind-high',
  'wind',
  'windsock'
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
