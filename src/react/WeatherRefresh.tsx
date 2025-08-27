import React from 'react'
import type { IconProps } from '../types'

export const WeatherRefresh = React.forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M24.832 19.136a.91.91 0 0 1 0 1.28l-2.72 2.72c-.192.16-.416.256-.64.256s-.448-.096-.64-.256l-2.72-2.72a.91.91 0 0 1 0-1.28.91.91 0 0 1 1.28 0l1.408 1.408v-3.008a4.036 4.036 0 0 0-4.032-4.032 4.015 4.015 0 0 0-4.032 4.032 4.036 4.036 0 0 0 4.032 4.032c.512 0 .896.416.896.896s-.384.896-.864.896c-3.2 0-5.824-2.624-5.824-5.824s2.624-5.824 5.824-5.824 5.824 2.624 5.824 5.824c0 .064 0 .16-.032.224v2.336l.96-.96a.91.91 0 0 1 1.28 0"/>
  </svg>
))

WeatherRefresh.displayName = 'WeatherRefresh'
