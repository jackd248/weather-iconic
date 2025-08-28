import React from 'react'
import type { IconProps } from '../types'

export const WeatherCompassWest = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  multiColor = false,
  primaryColor,
  secondaryColor,
  className,
  style,
  title,
  ...props
}, ref) => {
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-compass-west' : ''}`.trim()
  const combinedStyle = multiColor ? {
    ...style,
    ...(primaryColor && { '--weather-primary-fill': primaryColor }),
    ...(secondaryColor && { '--weather-secondary-fill': secondaryColor })
  } as React.CSSProperties : style

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={multiColor ? 'none' : color}
      className={combinedClassName}
      style={combinedStyle}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? 'false' : 'true'}
      aria-label={title}
      {...props}
    >
      {title && <title>{title}</title>}
      <path 
        d="M16.064,13.952C14.208,13.952 11.84,16 11.84,16C11.84,16 14.208,18.048 16.064,18.048C17.184,18.048 18.112,17.152 18.112,16C18.112,14.848 17.216,13.952 16.064,13.952ZM16.096,16.608C15.776,16.608 15.456,16.32 15.456,16C15.456,15.68 15.744,15.392 16.064,15.392C16.384,15.392 16.704,15.648 16.704,16C16.704,16.352 16.416,16.608 16.096,16.608Z"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
      <path 
        d="M21.92,10.112C20.352,8.544 18.272,7.68 16.064,7.68C11.488,7.68 7.776,11.424 7.776,16C7.776,18.208 8.64,20.256 10.208,21.824C11.776,23.392 13.856,24.256 16.064,24.256C20.64,24.256 24.352,20.544 24.352,15.968C24.352,13.76 23.488,11.68 21.92,10.112ZM16.064,22.464C14.304,22.464 12.672,21.792 11.456,20.576C10.24,19.36 9.568,17.728 9.568,16C9.568,12.416 12.48,9.504 16.064,9.472C17.824,9.472 19.456,10.112 20.672,11.36C21.888,12.608 22.56,14.24 22.56,15.968C22.56,19.552 19.648,22.464 16.064,22.464Z"
        fill={multiColor ? (secondaryColor || "#666666") : color}
      />
    </svg>
  )
})

WeatherCompassWest.displayName = 'WeatherCompassWest'
