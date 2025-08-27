import React from 'react'
import type { IconProps } from '../types'

export const WeatherThermometerMedium = React.forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M19.648 19.904c.224.416.544 1.152.544 1.92.032 2.208-1.664 3.904-3.776 3.904a3.85 3.85 0 0 1-3.84-3.84c0-.8.192-1.568.576-2.144V9.856c-.032-.064-.032-.16-.032-.224 0-1.856 1.472-3.36 3.264-3.36s3.264 1.504 3.264 3.36zm-3.264 3.968c1.12 0 2.016-.896 2.016-2.016 0-.32-.16-.8-.416-1.216a.9.9 0 0 1-.128-.64V9.632c0-.832-.672-1.568-1.472-1.568s-1.472.704-1.472 1.568v.032c.032.064.032.16.032.224v10.176a.87.87 0 0 1-.256.608c-.224.32-.32.736-.32 1.184 0 1.12.896 2.016 2.016 2.016m.032-9.792c.512 0 .896.416.896.896v7.136c0 .48-.416.896-.896.896a.894.894 0 0 1-.896-.896v-7.136c0-.512.416-.896.896-.896"/>
  </svg>
))

WeatherThermometerMedium.displayName = 'WeatherThermometerMedium'
