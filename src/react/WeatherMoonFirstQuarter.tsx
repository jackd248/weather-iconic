import React from 'react'
import type { IconProps } from '../types'

export const WeatherMoonFirstQuarter = React.forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M15.84 8.48c4.16 0 7.52 3.36 7.52 7.52s-3.36 7.52-7.52 7.52c-4.128 0-7.52-3.36-7.52-7.52s3.36-7.52 7.52-7.52m0 13.248A5.72 5.72 0 0 0 21.568 16a5.72 5.72 0 0 0-5.728-5.728z"/>
  </svg>
))

WeatherMoonFirstQuarter.displayName = 'WeatherMoonFirstQuarter'
