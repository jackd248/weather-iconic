import React from 'react'
import type { IconProps } from '../types'

export const WeatherMoonWaningCrescent = React.forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M23.36 16.064a7.44 7.44 0 0 1-5.312 7.168c-.032 0-.064.032-.096.032a6.6 6.6 0 0 1-2.112.32c-4.16 0-7.52-3.36-7.52-7.52s3.36-7.52 7.52-7.52q1.104 0 2.112.288l.288.096a7.51 7.51 0 0 1 5.12 7.136m-13.248 0a5.72 5.72 0 0 0 4.864 5.664c-1.024-1.312-1.664-3.36-1.664-5.664 0-2.336.64-4.352 1.664-5.664a5.72 5.72 0 0 0-4.864 5.664"/>
  </svg>
))

WeatherMoonWaningCrescent.displayName = 'WeatherMoonWaningCrescent'
