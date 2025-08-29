import React from 'react'
import type { IconProps } from '../types'

export const WeatherCloudUp = React.forwardRef<SVGSVGElement, IconProps>(({
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
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-cloud-up' : ''}`.trim()
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
        d="M17.184,15.584C16.832,15.232 16.256,15.232 15.904,15.584L13.504,17.984C13.152,18.336 13.152,18.912 13.504,19.264C13.856,19.616 14.432,19.616 14.784,19.264L15.68,18.368L15.68,22.72C15.68,23.2 16.064,23.616 16.576,23.616C17.056,23.616 17.472,23.2 17.472,22.72L17.472,18.432L18.304,19.264C18.496,19.424 18.72,19.52 18.944,19.52C19.2,19.52 19.424,19.424 19.584,19.264C19.936,18.912 19.936,18.336 19.584,17.984L17.184,15.584Z"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
      <path 
        d="M23.712,14.528L23.712,14.144C23.712,10.848 21.024,8.192 17.76,8.192C15.776,8.192 13.952,9.152 12.832,10.816C12.576,10.752 12.288,10.72 12,10.72C8.992,10.72 6.56,13.152 6.56,16.16L6.56,16.256C6.56,19.264 8.992,21.696 12,21.696C12.48,21.696 12.896,21.28 12.896,20.8C12.896,20.32 12.512,19.904 12,19.904C10.016,19.904 8.416,18.336 8.352,16.352C8.352,16.288 8.384,16.256 8.384,16.192C8.384,15.584 8.544,15.008 8.8,14.496C9.408,13.376 10.624,12.608 12,12.608C12.256,12.608 12.576,12.64 12.832,12.704C13.28,12.864 13.728,13.12 14.048,13.344C14.464,13.6 15.008,13.504 15.296,13.088C15.552,12.672 15.456,12.128 15.04,11.84C14.88,11.744 14.72,11.616 14.528,11.52C15.296,10.56 16.48,9.952 17.76,9.952C20.032,9.952 21.888,11.808 21.888,14.08C21.888,14.304 21.856,14.528 21.824,14.784C21.76,15.168 21.952,15.584 22.336,15.744C23.104,16.096 23.584,16.864 23.584,17.696C23.584,18.88 22.624,19.84 21.44,19.84C20.96,19.84 20.544,20.256 20.544,20.736C20.544,21.216 20.928,21.632 21.44,21.632C23.616,21.632 25.408,19.84 25.44,17.792C25.44,16.48 24.768,15.264 23.712,14.528Z"
        fill={multiColor ? (secondaryColor || "#666666") : color}
      />
    </svg>
  )
})

WeatherCloudUp.displayName = 'WeatherCloudUp'
