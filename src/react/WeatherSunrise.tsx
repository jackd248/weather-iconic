import React from 'react'
import type { IconProps } from '../types'

export const WeatherSunrise = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  className,
  style,
  title,
  ...props
}, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={color}
    className={className}
    style={style}
    role={title ? 'img' : 'presentation'}
    aria-hidden={title ? 'false' : 'true'}
    aria-label={title}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M15.456 13.696a.894.894 0 0 1-.896-.896v-1.312c0-.512.416-.896.896-.896s.896.416.896.896V12.8c0 .48-.416.896-.896.896m-5.888 1.92-.928-.928a.91.91 0 0 1 0-1.28.91.91 0 0 1 1.28 0l.928.928a.91.91 0 0 1 0 1.28c-.192.16-.416.256-.64.256s-.448-.096-.64-.256m14.944 3.904c.48 0 .896.288.896.8s-.384.8-.896.8H6.688c-.48 0-.896-.288-.896-.8s.384-.8.896-.8h3.488c.384-2.56 2.624-4.544 5.28-4.544s4.864 1.984 5.248 4.544zM12 19.52h6.88a3.5 3.5 0 0 0-3.424-2.752c-1.696 0-3.104 1.152-3.456 2.752m10.4 2.592c.512 0 .896.416.896.896s-.384.896-.896.896H8.768a.894.894 0 0 1-.896-.896c0-.48.416-.896.896-.896zm-1.536-6.272a.95.95 0 0 1-.64-.256.91.91 0 0 1 0-1.28l.288-.288a.92.92 0 0 1-.288-.64c0-.512.384-.896.896-.896h1.312c.48 0 .928.384.96.896v1.312c0 .48-.416.896-.928.896-.256 0-.512-.096-.672-.288l-.288.288c-.192.16-.416.256-.64.256"/>
  </svg>
))

WeatherSunrise.displayName = 'WeatherSunrise'
