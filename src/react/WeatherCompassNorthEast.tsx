import React from 'react'
import type { IconProps } from '../types'

export const WeatherCompassNorthEast = React.forwardRef<SVGSVGElement, IconProps>(({
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
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-compass-north-east' : ''}`.trim()
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
        d="M14.592,17.472C15.392,18.272 16.672,18.272 17.472,17.472C18.784,16.128 19.04,13.024 19.04,13.024C19.04,13.024 15.936,13.248 14.592,14.592C13.792,15.392 13.792,16.672 14.592,17.472ZM15.584,15.552C15.84,15.296 16.224,15.296 16.48,15.552C16.736,15.808 16.736,16.192 16.48,16.448C16.224,16.704 15.84,16.704 15.584,16.448C15.328,16.192 15.328,15.808 15.584,15.552Z"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
      <path 
        d="M21.92,10.112C20.352,8.544 18.272,7.68 16.064,7.68C13.856,7.68 11.776,8.544 10.208,10.112C6.976,13.344 6.976,18.624 10.208,21.856C11.776,23.424 13.856,24.288 16.064,24.288C18.272,24.288 20.352,23.424 21.92,21.856C25.152,18.624 25.152,13.344 21.92,10.112ZM20.672,20.576C19.424,21.792 17.824,22.464 16.064,22.464C14.304,22.464 12.672,21.792 11.456,20.576C8.928,18.048 8.928,13.92 11.456,11.392C12.704,10.176 14.336,9.504 16.064,9.504C17.792,9.504 19.424,10.176 20.672,11.392C23.2,13.92 23.2,18.048 20.672,20.576Z"
        fill={multiColor ? (secondaryColor || "#666666") : color}
      />
    </svg>
  )
})

WeatherCompassNorthEast.displayName = 'WeatherCompassNorthEast'
