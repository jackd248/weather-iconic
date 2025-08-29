import React from 'react'
import type { IconProps } from '../types'

export const WeatherRaindrop = React.forwardRef<SVGSVGElement, IconProps>(({
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
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-raindrop' : ''}`.trim()
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
        d="M14.976,16.032C14.976,16.032 13.216,17.472 13.216,19.104C13.216,20.064 14.016,20.864 14.976,20.864C15.936,20.864 16.736,20.064 16.736,19.104C16.736,17.472 14.976,16.032 14.976,16.032Z"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
      <path 
        d="M16.736,8.096C16.384,7.808 15.904,7.808 15.584,8.096C15.36,8.288 9.568,13.12 9.568,18.752C9.568,22.368 12.512,25.344 16.16,25.344C19.808,25.344 22.752,22.4 22.752,18.752C22.752,13.12 16.992,8.288 16.736,8.096ZM16.16,23.552C13.504,23.552 11.36,21.408 11.36,18.752C11.36,14.912 14.784,11.296 16.16,9.984C17.536,11.296 20.96,14.912 20.96,18.752C20.96,21.408 18.816,23.552 16.16,23.552Z"
        fill={multiColor ? (secondaryColor || "#666666") : color}
      />
    </svg>
  )
})

WeatherRaindrop.displayName = 'WeatherRaindrop'
