import React from 'react'
import type { IconProps } from '../types'

export const WeatherFahrenheit = React.forwardRef<SVGSVGElement, IconProps>(({
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
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-fahrenheit' : ''}`.trim()
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
        d="M10.432,9.664C8.736,9.664 7.488,11.04 7.488,12.864C7.488,14.72 8.736,16.064 10.432,16.064C12.192,16.064 13.408,14.72 13.408,12.864C13.408,11.04 12.192,9.664 10.432,9.664ZM10.432,14.72C9.344,14.72 8.8,13.792 8.8,12.864C8.8,11.968 9.344,10.976 10.432,11.008C11.552,11.008 12.096,11.968 12.096,12.864C12.096,13.76 11.552,14.72 10.432,14.72Z"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
      <path 
        d="M23.936,9.76L16.192,9.76C15.616,9.76 15.2,10.144 15.2,10.72L15.2,23.68C15.2,24.256 15.552,24.64 16.16,24.64C16.768,24.64 17.12,24.224 17.12,23.68L17.12,18.208L21.728,18.208C22.272,18.208 22.624,17.888 22.624,17.376C22.624,16.832 22.272,16.512 21.728,16.512L17.12,16.512L17.12,11.488L23.936,11.488C24.48,11.488 24.832,11.136 24.832,10.624C24.832,10.112 24.48,9.76 23.936,9.76Z"
        fill={multiColor ? (secondaryColor || "#666666") : color}
      />
    </svg>
  )
})

WeatherFahrenheit.displayName = 'WeatherFahrenheit'
