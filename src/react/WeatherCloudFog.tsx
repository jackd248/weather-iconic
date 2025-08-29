import React from 'react'
import type { IconProps } from '../types'

export const WeatherCloudFog = React.forwardRef<SVGSVGElement, IconProps>(({
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
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-cloud-fog' : ''}`.trim()
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
        d="M23.2,20.96C23.712,20.96 24.096,21.376 24.096,21.856C24.096,22.336 23.68,22.752 23.2,22.752L11.776,22.752C11.264,22.752 10.88,22.336 10.88,21.856C10.88,21.376 11.296,20.96 11.776,20.96L23.2,20.96ZM25.28,18.688C25.792,18.688 26.176,19.104 26.176,19.584C26.176,20.064 25.792,20.48 25.28,20.48L9.088,20.48C8.576,20.48 8.192,20.064 8.192,19.584C8.192,19.104 8.608,18.688 9.088,18.688L25.28,18.688ZM25.792,17.312C25.792,17.792 25.408,18.208 24.896,18.208L7.904,18.208C7.392,18.208 7.008,17.792 7.008,17.312C7.008,16.832 7.424,16.416 7.904,16.416L24.896,16.416C25.408,16.416 25.792,16.832 25.792,17.312Z"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
      <path 
        d="M8.416,15.84C8.576,15.936 8.736,15.968 8.896,15.968C9.216,15.968 9.504,15.808 9.664,15.52C10.496,14.144 12.16,13.472 13.76,13.92C14.176,14.016 14.624,13.824 14.816,13.44C15.52,12.032 16.928,11.136 18.528,11.136C20.736,11.136 22.56,12.864 22.656,15.072C22.656,15.584 23.072,15.968 23.584,15.936C24.096,15.936 24.48,15.52 24.448,15.008C24.288,11.84 21.664,9.376 18.496,9.376C16.48,9.376 14.624,10.368 13.536,12.064C11.392,11.744 9.248,12.736 8.128,14.592C7.872,15.04 8,15.584 8.416,15.84Z"
        fill={multiColor ? (secondaryColor || "#666666") : color}
      />
    </svg>
  )
})

WeatherCloudFog.displayName = 'WeatherCloudFog'
