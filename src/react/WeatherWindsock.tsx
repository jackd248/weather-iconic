import React from 'react'
import type { IconProps } from '../types'

export const WeatherWindsock = React.forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M25.12 14.368c.352.224.48.704.32 1.088l-1.12 2.72a.9.9 0 0 1-.832.544h-.16l-4.64-.832c-.128 0-.224-.032-.352-.064l-2.112-.384c-.064-.032-.128-.032-.192-.064H16c-.192-.096-.352-.224-.448-.416l-1.696-2.176c-.192-.256-.256-.608-.128-.896l.224-.544-1.344-.544v13.92c.032.512-.384.896-.896.896a.894.894 0 0 1-.896-.896V9.984c0-.512.416-.896.896-.896s.896.416.896.896v.864l2.016.832.224-.544c.128-.288.384-.512.704-.544l2.688-.384c.224-.096.448-.096.704 0 .096.064.192.128.256.192zM17.6 15.84l.544.096 1.312-3.264-.448-.288zm2.336.416.544.096.96-2.368-.448-.288zm-2.752-4.128-.864.128-.736 1.792.544.672zm5.728 4.672.576-1.408-.512-.352-.672 1.664z"/>
  </svg>
))

WeatherWindsock.displayName = 'WeatherWindsock'
