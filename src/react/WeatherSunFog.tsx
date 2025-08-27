import React from 'react'
import type { IconProps } from '../types'

export const WeatherSunFog = React.forwardRef<SVGSVGElement, IconProps>(({
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
    <path d="M25.056 12.256c.512 0 .896.416.896.896s-.416.896-.896.896h-2.4c.16.608.256 1.28.256 1.952q0 1.056-.288 2.016h.096c.512 0 .896.416.896.896s-.384.896-.864.896h-.896c-1.312 2.08-3.616 3.488-6.24 3.488-3.712 0-6.784-2.784-7.232-6.4h-.416A.894.894 0 0 1 7.072 16c0-.512.416-.896.896-.896h.416a7.27 7.27 0 0 1 7.232-6.4 7.28 7.28 0 0 1 6.272 3.552zM21.12 16c0-.704-.128-1.344-.352-1.952H16a.894.894 0 0 1-.896-.896c0-.48.416-.896.896-.896h3.648c-1.024-1.088-2.432-1.76-4.032-1.76-2.752 0-5.024 1.984-5.44 4.608h5.056c.512 0 .896.416.896.896a.894.894 0 0 1-.896.896h-5.056c.448 2.624 2.72 4.608 5.44 4.608 1.568 0 2.976-.64 3.968-1.696h-4.736a.894.894 0 0 1-.896-.896c0-.48.416-.896.896-.896h5.888q.384-.96.384-2.016"/>
  </svg>
))

WeatherSunFog.displayName = 'WeatherSunFog'
