import React from 'react'
import type { IconProps } from '../types'

export const WeatherSun = React.forwardRef<SVGSVGElement, IconProps>(({
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
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-sun' : ''}`.trim()
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
        d="M16 11.008c2.944 0 5.312 2.4 5.312 5.312A5.3 5.3 0 0 1 16 21.632c-2.944 0-5.312-2.4-5.312-5.312 0-2.944 2.4-5.312 5.312-5.312m0 8.832a3.51 3.51 0 0 0 3.52-3.52A3.51 3.51 0 0 0 16 12.8a3.51 3.51 0 0 0-3.52 3.52A3.51 3.51 0 0 0 16 19.84m0-10.048a.894.894 0 0 1-.896-.896V7.584c0-.512.416-.896.896-.896.512 0 .896.416.896.896v1.312a.875.875 0 0 1-.896.896m-5.888 1.92-.928-.928a.91.91 0 0 1 0-1.28.91.91 0 0 1 1.28 0l.928.928a.91.91 0 0 1 0 1.28c-.192.16-.416.256-.64.256s-.448-.096-.64-.256m-.64 4.608a.875.875 0 0 1-.896.896H7.264a.894.894 0 0 1-.896-.896c0-.512.416-.896.896-.896h1.312c.512 0 .896.416.896.896m.64 4.608a.91.91 0 0 1 1.28 0 .91.91 0 0 1 0 1.28l-.928.928c-.192.16-.416.256-.64.256s-.448-.096-.64-.256a.91.91 0 0 1 0-1.28zM16 22.848c.512 0 .896.416.896.896v1.312a.875.875 0 0 1-.896.896.894.894 0 0 1-.896-.896v-1.312c0-.512.416-.896.896-.896m5.888-1.92.928.928a.91.91 0 0 1 0 1.28c-.192.16-.416.256-.64.256s-.448-.096-.64-.256l-.928-.928a.91.91 0 0 1 0-1.28.91.91 0 0 1 1.28 0m2.848-5.504c.512 0 .896.416.896.896a.875.875 0 0 1-.896.896h-1.312a.894.894 0 0 1-.896-.896c0-.512.416-.896.896-.896zm-3.488-3.456c-.224 0-.448-.096-.64-.256a.91.91 0 0 1 0-1.28l.928-.928a.91.91 0 0 1 1.28 0 .91.91 0 0 1 0 1.28l-.928.928c-.192.16-.416.256-.64.256"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
    </svg>
  )
})

WeatherSun.displayName = 'WeatherSun'
