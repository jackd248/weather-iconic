import React from 'react'
import type { IconProps } from '../types'

export const WeatherWindsock = React.forwardRef<SVGSVGElement, IconProps>(({
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
  const combinedClassName = `${className || ''} ${multiColor ? 'weather-multi-color weather-windsock' : ''}`.trim()
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
        d="M12.608,12.8L12.608,10.848L14.624,11.68L14.848,11.136C14.976,10.848 15.232,10.624 15.552,10.592L18.24,10.208C18.464,10.112 18.688,10.112 18.944,10.208C19.04,10.272 19.136,10.336 19.2,10.4L25.12,14.368C25.472,14.592 25.6,15.072 25.44,15.456L24.32,18.176C24.16,18.528 23.84,18.72 23.488,18.72L23.328,18.72L18.688,17.888C18.56,17.888 18.464,17.856 18.336,17.824L16.224,17.44C16.16,17.408 16.096,17.408 16.032,17.376L16,17.376C15.808,17.28 15.648,17.152 15.552,16.96L13.856,14.784C13.664,14.528 13.6,14.176 13.728,13.888L13.952,13.344L12.608,12.8ZM17.184,12.128L16.32,12.256L15.584,14.048L16.128,14.72L17.184,12.128ZM19.936,16.256L20.48,16.352L21.44,13.984L20.992,13.696L19.936,16.256ZM22.912,16.8L23.488,15.392L22.976,15.04L22.304,16.704L22.912,16.8ZM17.6,15.84L18.144,15.936L19.456,12.672L19.008,12.384L17.6,15.84Z"
        fill={multiColor ? (primaryColor || "currentColor") : color}
      />
      <path 
        d="M12.608,9.984L12.608,26.72C12.64,27.232 12.224,27.616 11.712,27.616C11.2,27.616 10.816,27.2 10.816,26.72L10.816,9.984C10.816,9.472 11.232,9.088 11.712,9.088C12.192,9.088 12.608,9.504 12.608,9.984Z"
        fill={multiColor ? (secondaryColor || "#666666") : color}
      />
    </svg>
  )
})

WeatherWindsock.displayName = 'WeatherWindsock'
