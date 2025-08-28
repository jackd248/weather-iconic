import React from 'react'
import type { IconProps } from '../types'

export const WeatherMoonWaningCrescent = React.forwardRef<SVGSVGElement, IconProps>(({
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
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-moon-waning-crescent' : ''}`.trim()
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
        d="M15.84,8.544C16.576,8.544 17.28,8.64 17.952,8.832L18.24,8.928C21.216,9.92 23.36,12.736 23.36,16.064C23.36,11.904 20,8.544 15.84,8.544ZM23.36,16.064C23.36,18.198 22.486,20.116 21.066,21.477C22.481,20.11 23.36,18.192 23.36,16.064ZM15.84,23.584C11.68,23.584 8.32,20.224 8.32,16.064C8.32,20.224 11.712,23.584 15.84,23.584ZM14.967,21.716C13.948,20.404 13.312,18.361 13.312,16.064C13.312,13.743 13.944,11.739 14.956,10.426C15.244,10.379 15.539,10.353 15.84,10.351L15.84,10.336C16.416,10.336 16.973,10.421 17.497,10.578C19.89,11.275 21.64,13.485 21.64,16.101C21.64,19.274 19.05,21.786 15.877,21.786C15.567,21.786 15.263,21.762 14.967,21.716Z"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
      <path 
        d="M8.32,16.064C8.32,11.904 11.68,8.544 15.84,8.544C20,8.544 23.36,11.904 23.36,16.064C23.36,18.192 22.481,20.11 21.066,21.477C20.228,22.279 19.2,22.888 18.048,23.232C18.016,23.232 17.984,23.264 17.952,23.264C17.28,23.488 16.576,23.584 15.84,23.584C11.712,23.584 8.32,20.224 8.32,16.064ZM14.956,10.426C14.962,10.417 14.969,10.409 14.976,10.4C12.224,10.816 10.112,13.184 10.112,16.064C10.112,18.944 12.224,21.312 14.976,21.728C14.973,21.724 14.97,21.72 14.967,21.716C15.263,21.762 15.567,21.786 15.877,21.786C19.05,21.786 21.64,19.274 21.64,16.101C21.64,13.485 19.89,11.275 17.497,10.578C16.973,10.421 16.416,10.336 15.84,10.336L15.84,10.351C15.539,10.353 15.244,10.379 14.956,10.426Z"
        fill={multiColor ? (secondaryColor || "#666666") : color}
      />
    </svg>
  )
})

WeatherMoonWaningCrescent.displayName = 'WeatherMoonWaningCrescent'
