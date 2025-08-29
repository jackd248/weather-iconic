import React from 'react'
import type { IconProps } from '../types'

export const WeatherMoonLastQuarter = React.forwardRef<SVGSVGElement, IconProps>(({
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
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-moon-last-quarter' : ''}`.trim()
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
        d="M16.864,23.552C12.704,23.552 9.344,20.192 9.344,16.032C9.344,20.192 12.736,23.552 16.864,23.552ZM16.864,21.754L16.864,10.304C17.44,10.304 17.997,10.389 18.521,10.546C20.914,11.243 22.664,13.453 22.664,16.069C22.664,19.242 20.074,21.754 16.901,21.754C16.889,21.754 16.876,21.754 16.864,21.754Z"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
      <path 
        d="M9.344,16.032C9.344,11.872 12.704,8.512 16.864,8.512C21.024,8.512 24.384,11.872 24.384,16.032C24.352,20.16 20.992,23.552 16.864,23.552C12.736,23.552 9.344,20.192 9.344,16.032ZM16.864,10.304C13.696,10.304 11.136,12.864 11.136,16.032C11.136,19.2 13.696,21.76 16.864,21.76L16.864,21.754L16.901,21.754C20.074,21.754 22.664,19.242 22.664,16.069C22.664,13.453 20.914,11.243 18.521,10.546C17.997,10.389 17.44,10.304 16.864,10.304Z"
        fill={multiColor ? (secondaryColor || "#666666") : color}
      />
    </svg>
  )
})

WeatherMoonLastQuarter.displayName = 'WeatherMoonLastQuarter'
