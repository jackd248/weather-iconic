import React from 'react'
import type { IconProps } from '../types'

export const WeatherMoonFullmoon = React.forwardRef<SVGSVGElement, IconProps>(({
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
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-moon-fullmoon' : ''}`.trim()
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
        d="M15.84 8.48c4.16 0 7.52 3.36 7.52 7.52s-3.36 7.52-7.52 7.52c-4.128 0-7.52-3.392-7.52-7.52s3.36-7.52 7.52-7.52"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
    </svg>
  )
})

WeatherMoonFullmoon.displayName = 'WeatherMoonFullmoon'
