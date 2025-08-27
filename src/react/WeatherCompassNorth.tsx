import React from 'react'
import type { IconProps } from '../types'

export const WeatherCompassNorth = React.forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M16.064 7.68c4.576 0 8.288 3.744 8.288 8.32a8.23 8.23 0 0 1-2.432 5.856 8.23 8.23 0 0 1-5.856 2.432A8.29 8.29 0 0 1 7.776 16c0-2.208.864-4.288 2.432-5.856s3.616-2.464 5.856-2.464m4.608 12.928C21.92 19.392 22.56 17.76 22.56 16a6.5 6.5 0 0 0-6.496-6.496c-1.728 0-3.36.672-4.608 1.888C10.24 12.608 9.568 14.24 9.568 16a6.5 6.5 0 0 0 6.496 6.496c1.728 0 3.36-.672 4.608-1.888M14.016 16c0-1.856 2.048-4.224 2.048-4.224S18.08 14.144 18.112 16a2.02 2.02 0 0 1-2.048 2.048A2.04 2.04 0 0 1 14.016 16m2.656.032a.63.63 0 0 0-.608-.608.63.63 0 0 0-.608.608c0 .32.256.608.608.608a.63.63 0 0 0 .608-.608"/>
  </svg>
))

WeatherCompassNorth.displayName = 'WeatherCompassNorth'
