import React from 'react'
import type { IconProps } from '../types'

export const WeatherCloudRainSingle = React.forwardRef<SVGSVGElement, IconProps>(({
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
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-cloud-rain-single' : ''}`.trim()
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
        d="M18.432,18.272C18.08,17.984 17.6,17.984 17.28,18.272C17.024,18.464 14.848,20.352 14.848,22.656C14.848,24.32 16.192,25.664 17.856,25.664C19.52,25.664 20.864,24.32 20.864,22.656C20.864,20.352 18.688,18.464 18.432,18.272ZM17.856,23.872C17.184,23.872 16.64,23.328 16.64,22.656C16.64,21.76 17.312,20.832 17.856,20.192C18.432,20.832 19.072,21.76 19.072,22.656C19.072,23.328 18.528,23.872 17.856,23.872Z"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
      <path 
        d="M24.832,15.648L24.832,15.264C24.832,11.968 22.144,9.312 18.88,9.312C16.896,9.312 15.04,10.272 13.952,11.936C13.664,11.872 13.376,11.84 13.088,11.84C10.08,11.84 7.648,14.272 7.648,17.28C7.648,17.376 7.68,17.44 7.68,17.536C7.776,20.48 10.144,22.816 13.12,22.816C13.6,22.816 14.016,22.4 14.016,21.92C14.016,21.44 13.632,21.024 13.12,21.024C11.104,21.024 9.472,19.392 9.472,17.376C9.472,15.36 11.104,13.728 13.12,13.728C13.344,13.728 13.6,13.76 13.824,13.792C14.304,13.952 14.784,14.24 15.136,14.464C15.552,14.72 16.128,14.624 16.384,14.208C16.64,13.792 16.544,13.248 16.128,12.96C15.968,12.864 15.808,12.736 15.648,12.64C16.416,11.648 17.6,11.072 18.88,11.072C21.152,11.072 23.008,12.928 23.008,15.2C23.008,15.424 22.976,15.648 22.944,15.904C22.88,16.288 23.072,16.704 23.456,16.864C24.224,17.216 24.704,17.984 24.704,18.816C24.704,20 23.744,20.96 22.56,20.96C22.08,20.96 21.664,21.376 21.664,21.856C21.664,22.336 22.048,22.752 22.56,22.752C24.736,22.752 26.496,20.992 26.56,18.912C26.56,17.6 25.888,16.384 24.832,15.648Z"
        fill={multiColor ? (secondaryColor || "#666666") : color}
      />
    </svg>
  )
})

WeatherCloudRainSingle.displayName = 'WeatherCloudRainSingle'
