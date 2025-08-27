import { CSSProperties, SVGProps } from 'react'

// Base icon properties shared across frameworks
export interface BaseIconProps {
  /** Icon size in pixels or CSS units */
  size?: number | string
  /** Icon color - supports CSS color values */
  color?: string
  /** Additional CSS class name */
  className?: string
  /** Inline styles */
  style?: CSSProperties
  /** Accessible title for screen readers */
  title?: string
}

// React-specific icon props
export interface IconProps extends BaseIconProps, Omit<SVGProps<SVGSVGElement>, 'ref' | 'size' | 'color' | 'style'> {}

// Vue-specific icon props (similar but without React-specific attributes)
export interface VueIconProps extends BaseIconProps {
  [key: string]: any // Allow v-bind attributes
}

// Icon metadata
export interface IconMetadata {
  name: string
  pascalName: string
  kebabName: string
  size: number
  originalSize: number
  compression: string
}

// Available icon names (will be generated dynamically)
export type IconName = 
  | 'barometer'
  | 'celsius'
  | 'cloud-down'
  | 'cloud-fog'
  | 'cloud-rain-single'
  | 'cloud-rain'
  | 'cloud-snow-single'
  | 'cloud-snow'
  | 'cloud-up'
  | 'cloud-wind'
  | 'cloud'
  | 'clouds'
  | 'compass-east'
  | 'compass-north-east'
  | 'compass-north-west'
  | 'compass-north'
  | 'compass-south-east'
  | 'compass-south-west'
  | 'compass-south'
  | 'compass-west'
  | 'compass'
  | 'fahrenheit'
  | 'fog'
  | 'hail'
  | 'lightning'
  | 'moon-cloud-lightning'
  | 'moon-cloud-rain'
  | 'moon-cloud-snow'
  | 'moon-cloud-wind'
  | 'moon-cloud'
  | 'moon-first-quarter'
  | 'moon-fog'
  | 'moon-fullmoon'
  | 'moon-last-quarter'
  | 'moon-newmoon'
  | 'moon-waning-crescent'
  | 'moon-waning-gibbous'
  | 'moon-waxing-crescent'
  | 'moon-waxing-gibbous'
  | 'moon'
  | 'rainbow'
  | 'raindrop'
  | 'refresh'
  | 'snowflake'
  | 'sun-cloud-lightning'
  | 'sun-cloud-rain'
  | 'sun-cloud-snow'
  | 'sun-cloud-wind'
  | 'sun-cloud'
  | 'sun-fog'
  | 'sun-low'
  | 'sun-medium'
  | 'sun'
  | 'sunrise'
  | 'sunset'
  | 'thermometer-cold'
  | 'thermometer-hot'
  | 'thermometer-medium'
  | 'tornado'
  | 'umbrella'
  | 'wind-high'
  | 'wind'
  | 'windsock'