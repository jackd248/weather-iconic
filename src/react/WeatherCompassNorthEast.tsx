import React from 'react'
import type { IconProps } from '../types'

export const WeatherCompassNorthEast = React.forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M21.92 10.112c3.232 3.232 3.232 8.512 0 11.744a8.23 8.23 0 0 1-5.856 2.432 8.23 8.23 0 0 1-5.856-2.432c-3.232-3.232-3.232-8.512 0-11.744a8.23 8.23 0 0 1 5.856-2.432c2.208 0 4.288.864 5.856 2.432m-1.248 10.464c2.528-2.528 2.528-6.656 0-9.184a6.57 6.57 0 0 0-4.608-1.888c-1.728 0-3.36.672-4.608 1.888-2.528 2.528-2.528 6.656 0 9.184 1.216 1.216 2.848 1.888 4.608 1.888s3.36-.672 4.608-1.888m-6.08-3.104c-.8-.8-.8-2.08 0-2.88 1.344-1.344 4.448-1.568 4.448-1.568s-.256 3.104-1.568 4.448c-.8.8-2.08.8-2.88 0m.992-1.92a.62.62 0 0 0 0 .896c.256.256.64.256.896 0a.62.62 0 0 0 0-.896.62.62 0 0 0-.896 0"/>
  </svg>
))

WeatherCompassNorthEast.displayName = 'WeatherCompassNorthEast'
