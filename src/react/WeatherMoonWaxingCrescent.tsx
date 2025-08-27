import React from 'react'
import type { IconProps } from '../types'

export const WeatherMoonWaxingCrescent = React.forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M16.672 8.48c4.16 0 7.52 3.392 7.52 7.52s-3.36 7.52-7.52 7.52c-4.128 0-7.52-3.36-7.52-7.52s3.36-7.52 7.52-7.52m.896 13.152c2.72-.448 4.832-2.816 4.832-5.632 0-2.848-2.08-5.184-4.832-5.632 1.024 1.312 1.664 3.328 1.664 5.632s-.64 4.32-1.664 5.632"/>
  </svg>
))

WeatherMoonWaxingCrescent.displayName = 'WeatherMoonWaxingCrescent'
