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
  'cloud-alt',
  'cloud-down',
  'cloud-fog',
  'cloud-hail',
  'cloud-haze',
  'cloud-rain-alt',
  'cloud-rain',
  'cloud-sleet',
  'cloud-smog',
  'cloud-snow-alt',
  'cloud-snow',
  'cloud-up',
  'cloud-wind',
  'cloud',
  'clouds-alt',
  'clouds',
  'compass-east',
  'compass-north-east',
  'compass-north-west',
  'compass-north',
  'compass-south-east',
  'compass-south-west',
  'compass-south',
  'compass-west',
  'date',
  'earthquake',
  'fahrenheit',
  'fire',
  'flood',
  'fog',
  'humidity',
  'hurricane',
  'info',
  'lightning',
  'moon-cloud-fog',
  'moon-cloud-hail',
  'moon-cloud-haze',
  'moon-cloud-lightning',
  'moon-cloud-rain-alt',
  'moon-cloud-rain',
  'moon-cloud-sleet',
  'moon-cloud-snow-alt',
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
  'moonrise',
  'moonset',
  'na',
  'pollen',
  'rainbow',
  'raindrop',
  'refresh',
  'sandstorm',
  'shooting-star',
  'snowflake',
  'star',
  'stars',
  'sun-cloud-fog',
  'sun-cloud-hail',
  'sun-cloud-haze',
  'sun-cloud-lightning',
  'sun-cloud-rain-alt',
  'sun-cloud-rain',
  'sun-cloud-sleet',
  'sun-cloud-snow-alt',
  'sun-cloud-snow',
  'sun-cloud-wind',
  'sun-cloud',
  'sun-eclipse',
  'sun-fog',
  'sun-high',
  'sun-low',
  'sun-medium',
  'sun',
  'sunrise',
  'sunset',
  'thermometer-cold',
  'thermometer-freeze',
  'thermometer-heat',
  'thermometer-hot',
  'thermometer-medium',
  'time',
  'tornado',
  'umbrella',
  'warning',
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
