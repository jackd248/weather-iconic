import React from 'react'
import type { IconProps } from '../types'

export const WeatherFahrenheit = React.forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M23.936 9.76c.544 0 .896.352.896.864s-.352.864-.896.864H17.12v5.024h4.608c.544 0 .896.32.896.864 0 .512-.352.832-.896.832H17.12v5.472c0 .544-.352.96-.96.96s-.96-.384-.96-.96V10.72c0-.576.416-.96.992-.96zm-13.504-.096c1.76 0 2.976 1.376 2.976 3.2 0 1.856-1.216 3.2-2.976 3.2-1.696 0-2.944-1.344-2.944-3.2 0-1.824 1.248-3.2 2.944-3.2m0 5.056c1.12 0 1.664-.96 1.664-1.856s-.544-1.856-1.664-1.856c-1.088-.032-1.632.96-1.632 1.856 0 .928.544 1.856 1.632 1.856"/>
  </svg>
))

WeatherFahrenheit.displayName = 'WeatherFahrenheit'
