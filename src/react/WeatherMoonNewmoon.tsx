import React from 'react'
import type { IconProps } from '../types'

export const WeatherMoonNewmoon = React.forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M16.672 8.48c4.16 0 7.52 3.392 7.52 7.52s-3.36 7.52-7.52 7.52c-4.128 0-7.52-3.36-7.52-7.52s3.36-7.52 7.52-7.52m0 13.216c3.136 0 5.728-2.56 5.728-5.696s-2.56-5.696-5.728-5.696A5.71 5.71 0 0 0 10.976 16a5.71 5.71 0 0 0 5.696 5.696"/>
  </svg>
))

WeatherMoonNewmoon.displayName = 'WeatherMoonNewmoon'
