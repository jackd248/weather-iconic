import React from 'react'
import type { IconProps } from '../types'

export const WeatherCompassSouth = React.forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M16.032 7.68c4.608 0 8.32 3.744 8.32 8.32a8.23 8.23 0 0 1-2.432 5.856 8.23 8.23 0 0 1-5.856 2.432A8.29 8.29 0 0 1 7.776 16c0-2.24.832-4.32 2.4-5.888a8.23 8.23 0 0 1 5.856-2.432m4.608 12.896c1.216-1.216 1.888-2.848 1.888-4.608a6.5 6.5 0 0 0-6.496-6.496c-1.728 0-3.36.672-4.608 1.888s-1.888 2.848-1.888 4.608a6.5 6.5 0 0 0 6.496 6.496 6.2 6.2 0 0 0 4.608-1.888m-4.576-6.656c1.152 0 2.048.928 2.048 2.048 0 1.856-2.048 4.224-2.048 4.224s-2.048-2.368-2.048-4.224c0-1.152.896-2.048 2.048-2.048m0 2.624a.63.63 0 0 0 .608-.608.608.608 0 1 0-1.216 0c0 .32.288.608.608.608"/>
  </svg>
))

WeatherCompassSouth.displayName = 'WeatherCompassSouth'
