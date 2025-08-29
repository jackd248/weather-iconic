import React from 'react'
import type { IconProps } from '../types'

export const WeatherCloudDown = React.forwardRef<SVGSVGElement, IconProps>(({
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
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-cloud-down' : ''}`.trim()
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
        d="M18.208,19.648L17.344,20.512L17.344,16.224C17.344,15.744 16.96,15.328 16.448,15.328C15.968,15.328 15.552,15.712 15.552,16.224L15.552,20.512L14.688,19.648C14.336,19.296 13.76,19.296 13.408,19.648C13.056,20 13.056,20.576 13.408,20.928L15.808,23.328C15.968,23.488 16.224,23.584 16.448,23.584C16.672,23.584 16.896,23.488 17.12,23.328L19.488,20.928C19.84,20.576 19.84,20 19.488,19.648C19.136,19.296 18.56,19.296 18.208,19.648Z"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
      <path 
        d="M23.552,14.432L23.552,14.048C23.552,10.752 20.864,8.096 17.6,8.096C15.584,8.096 13.728,9.12 12.64,10.784C12.384,10.72 12.128,10.688 11.872,10.688C10.368,10.688 8.992,11.296 8,12.288C7.008,13.28 6.4,14.624 6.4,16.16C6.4,19.168 8.832,21.6 11.84,21.6C12.32,21.6 12.736,21.216 12.736,20.704C12.736,20.224 12.352,19.808 11.84,19.808C9.92,19.808 8.32,18.304 8.224,16.352C8.256,16.288 8.256,16.192 8.288,16.128C8.288,15.136 8.672,14.272 9.312,13.6C9.952,12.96 10.848,12.576 11.84,12.576C12.128,12.576 12.48,12.608 12.768,12.704C13.216,12.864 13.6,13.12 13.92,13.312C14.336,13.568 14.88,13.472 15.168,13.056C15.424,12.64 15.328,12.096 14.912,11.808C14.752,11.712 14.56,11.584 14.368,11.456C15.168,10.496 16.32,9.92 17.6,9.92C19.904,9.92 21.76,11.776 21.76,14.048C21.76,14.272 21.728,14.496 21.696,14.752C21.632,15.136 21.824,15.552 22.208,15.712C22.976,16.064 23.456,16.832 23.456,17.664C23.456,18.848 22.496,19.808 21.312,19.808C20.832,19.808 20.416,20.192 20.416,20.704C20.416,21.184 20.8,21.6 21.312,21.6C23.488,21.6 25.248,19.84 25.28,17.664C25.28,16.384 24.608,15.168 23.552,14.432Z"
        fill={multiColor ? (secondaryColor || "#666666") : color}
      />
    </svg>
  )
})

WeatherCloudDown.displayName = 'WeatherCloudDown'
