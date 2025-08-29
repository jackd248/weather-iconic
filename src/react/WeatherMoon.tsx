import React from 'react'
import type { IconProps } from '../types'

export const WeatherMoon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  multiColor = false,
  primaryColor,
  secondaryColor,
  className,
  style,
  title,
  ...props
}, ref) => {
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-moon' : ''}`.trim()
  const combinedStyle = multiColor ? {
    ...style,
    ...(primaryColor && { '--weather-primary-fill': primaryColor }),
    ...(secondaryColor && { '--weather-secondary-fill': secondaryColor })
  } as React.CSSProperties : style

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={multiColor ? 'none' : color}
      className={combinedClassName}
      style={combinedStyle}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? 'false' : 'true'}
      aria-label={title}
      {...props}
    >
      {title && <title>{title}</title>}
      <path 
        d="M22.496 16.128c.224.16.32.448.288.704-.256 3.328-3.104 5.952-6.464 5.952a6.5 6.5 0 0 1-6.496-6.496c0-2.912 1.952-5.472 4.768-6.272a.86.86 0 0 1 .736.16c.224.16.32.448.288.704 0 .128-.032.256-.032.416a4.86 4.86 0 0 0 4.864 4.864c.416 0 .864-.064 1.312-.192a.86.86 0 0 1 .736.16M16.32 21.12c2.112 0 3.968-1.408 4.608-3.36-3.52.288-6.56-2.336-6.944-5.728a4.85 4.85 0 0 0-2.528 4.256c0 2.656 2.176 4.832 4.864 4.832"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
    </svg>
  )
})

WeatherMoon.displayName = 'WeatherMoon'
