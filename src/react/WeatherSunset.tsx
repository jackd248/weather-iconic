import React from 'react'
import type { IconProps } from '../types'

export const WeatherSunset = React.forwardRef<SVGSVGElement, IconProps>(({
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
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-sunset' : ''}`.trim()
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
        d="M10.208,18.24C10.592,15.68 12.8,13.696 15.456,13.696C18.112,13.696 20.32,15.68 20.704,18.24L18.88,18.24C18.528,16.64 17.12,15.488 15.456,15.488C13.792,15.488 12.384,16.64 12.032,18.24L10.208,18.24ZM15.36,12.448C14.848,12.448 14.4,12.032 14.4,11.552L14.4,10.24C14.4,9.76 14.848,9.344 15.36,9.344C15.872,9.344 16.32,9.728 16.32,10.24L16.32,11.552C16.32,12.032 15.872,12.448 15.36,12.448ZM20.704,14.624C20.48,14.624 20.256,14.528 20.064,14.368C19.712,14.016 19.712,13.44 20.064,13.088L20.992,12.16C21.344,11.808 21.92,11.808 22.272,12.16C22.624,12.512 22.624,13.088 22.272,13.44L21.344,14.368C21.152,14.528 20.928,14.624 20.704,14.624ZM8.352,13.12L8.032,12.864C7.68,12.512 7.68,11.936 8.032,11.584C8.384,11.232 8.96,11.232 9.312,11.584L9.6,11.872C9.76,11.712 10.016,11.584 10.272,11.584C10.784,11.584 11.2,11.968 11.2,12.48L11.2,13.792C11.2,14.272 10.784,14.72 10.272,14.72L8.96,14.72C8.48,14.72 8.064,14.304 8.064,13.792C8.064,13.536 8.16,13.28 8.352,13.12Z"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
      <path 
        d="M6.72,18.24L24.512,18.24C25.024,18.24 25.408,18.528 25.408,19.04C25.408,19.552 25.024,19.84 24.512,19.84L6.72,19.84C6.24,19.84 5.824,19.552 5.824,19.04C5.824,18.528 6.208,18.24 6.72,18.24ZM22.432,20.8C22.912,20.8 23.328,21.248 23.296,21.76C23.296,22.272 22.912,22.72 22.4,22.72L8.768,22.72C8.288,22.72 7.872,22.272 7.872,21.76C7.872,21.248 8.256,20.8 8.768,20.8L22.432,20.8Z"
        fill={multiColor ? (secondaryColor || "#666666") : color}
      />
    </svg>
  )
})

WeatherSunset.displayName = 'WeatherSunset'
