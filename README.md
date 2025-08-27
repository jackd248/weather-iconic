<div align="center">

# Weather Iconic

</div>

A minimal weather iconset containing 63 icons available as **React components**, **Vue components**, **optimized SVGs** and **sprite collections**. 

## ✨Features
- TypeScript support with auto-completion
- Tree-shaking for optimal bundle sizes
- Accessibility features (ARIA labels)
- Customizable props (size, color, className)
- SVG sprites for performance optimization
- Webfont generation (WOFF2, WOFF, TTF, EOT)
- PNG exports in multiple sizes (16px to 128px) with retina support

> [!NOTE]
> Originally made for the weather app [temps](https://jackd248.github.io/temps/).

## 🔥 Installation

```bash
npm install @weather-iconic/icons
```

## ⚡ Usage

### React Components
```jsx
import { WeatherSun, WeatherCloudRain } from '@weather-iconic/icons/react'

<WeatherSun size={32} color="orange" />
<WeatherCloudRain size={24} color="blue" title="Rainy weather" />
```

### Vue Components
```vue
<template>
  <WeatherSun :size="32" color="orange" />
</template>

<script setup>
import { WeatherSun } from '@weather-iconic/icons/vue'
</script>
```

### Webfonts
```css
@import '@weather-iconic/icons/fonts/css';

<i class="weather-sun"></i>
<i class="weather-cloud-rain weather-icon--lg"></i>
```

### PNG Images
```javascript
import { getPNGPath, generateSrcSet } from '@weather-iconic/icons/png-utils'

// Get PNG path
const iconPath = getPNGPath('sun', 24, 2) // 24px @2x

// Responsive images
<img src={getPNGPath('sun', 24)} 
     srcset={generateSrcSet('sun', 24)} 
     alt="Sunny weather" />
```

### SVG Sprites
```javascript
import { loadSprite } from '@weather-iconic/icons/sprites'

// Load sprite into DOM
await loadSprite()

// Use sprite icons
<svg><use href="#weather-sun"></use></svg>
```

## 🪄 Icons
All 63 weather icons with visual previews:

<table>
<tr>
  <td align="center">
    <img src="dist/png/48px/barometer.png" width="32" height="32" alt="barometer"><br>
    <sub><code>barometer</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/celsius.png" width="32" height="32" alt="celsius"><br>
    <sub><code>celsius</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/cloud.png" width="32" height="32" alt="cloud"><br>
    <sub><code>cloud</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/cloud-down.png" width="32" height="32" alt="cloud-down"><br>
    <sub><code>cloud-down</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/cloud-fog.png" width="32" height="32" alt="cloud-fog"><br>
    <sub><code>cloud-fog</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/cloud-rain.png" width="32" height="32" alt="cloud-rain"><br>
    <sub><code>cloud-rain</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/cloud-rain-single.png" width="32" height="32" alt="cloud-rain-single"><br>
    <sub><code>cloud-rain-single</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px/cloud-snow.png" width="32" height="32" alt="cloud-snow"><br>
    <sub><code>cloud-snow</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/cloud-snow-single.png" width="32" height="32" alt="cloud-snow-single"><br>
    <sub><code>cloud-snow-single</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/cloud-up.png" width="32" height="32" alt="cloud-up"><br>
    <sub><code>cloud-up</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/cloud-wind.png" width="32" height="32" alt="cloud-wind"><br>
    <sub><code>cloud-wind</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/clouds.png" width="32" height="32" alt="clouds"><br>
    <sub><code>clouds</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/compass.png" width="32" height="32" alt="compass"><br>
    <sub><code>compass</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/compass-east.png" width="32" height="32" alt="compass-east"><br>
    <sub><code>compass-east</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px/compass-north.png" width="32" height="32" alt="compass-north"><br>
    <sub><code>compass-north</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/compass-north-east.png" width="32" height="32" alt="compass-north-east"><br>
    <sub><code>compass-north-east</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/compass-north-west.png" width="32" height="32" alt="compass-north-west"><br>
    <sub><code>compass-north-west</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/compass-south.png" width="32" height="32" alt="compass-south"><br>
    <sub><code>compass-south</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/compass-south-east.png" width="32" height="32" alt="compass-south-east"><br>
    <sub><code>compass-south-east</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/compass-south-west.png" width="32" height="32" alt="compass-south-west"><br>
    <sub><code>compass-south-west</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/compass-west.png" width="32" height="32" alt="compass-west"><br>
    <sub><code>compass-west</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px/fahrenheit.png" width="32" height="32" alt="fahrenheit"><br>
    <sub><code>fahrenheit</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/fog.png" width="32" height="32" alt="fog"><br>
    <sub><code>fog</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/hail.png" width="32" height="32" alt="hail"><br>
    <sub><code>hail</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/lightning.png" width="32" height="32" alt="lightning"><br>
    <sub><code>lightning</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/moon.png" width="32" height="32" alt="moon"><br>
    <sub><code>moon</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/moon-cloud.png" width="32" height="32" alt="moon-cloud"><br>
    <sub><code>moon-cloud</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/moon-cloud-lightning.png" width="32" height="32" alt="moon-cloud-lightning"><br>
    <sub><code>moon-cloud-lightning</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px/moon-cloud-rain.png" width="32" height="32" alt="moon-cloud-rain"><br>
    <sub><code>moon-cloud-rain</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/moon-cloud-snow.png" width="32" height="32" alt="moon-cloud-snow"><br>
    <sub><code>moon-cloud-snow</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/moon-cloud-wind.png" width="32" height="32" alt="moon-cloud-wind"><br>
    <sub><code>moon-cloud-wind</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/moon-first-quarter.png" width="32" height="32" alt="moon-first-quarter"><br>
    <sub><code>moon-first-quarter</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/moon-fog.png" width="32" height="32" alt="moon-fog"><br>
    <sub><code>moon-fog</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/moon-fullmoon.png" width="32" height="32" alt="moon-fullmoon"><br>
    <sub><code>moon-fullmoon</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/moon-last-quarter.png" width="32" height="32" alt="moon-last-quarter"><br>
    <sub><code>moon-last-quarter</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px/moon-newmoon.png" width="32" height="32" alt="moon-newmoon"><br>
    <sub><code>moon-newmoon</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/moon-waning-crescent.png" width="32" height="32" alt="moon-waning-crescent"><br>
    <sub><code>moon-waning-crescent</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/moon-waning-gibbous.png" width="32" height="32" alt="moon-waning-gibbous"><br>
    <sub><code>moon-waning-gibbous</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/moon-waxing-crescent.png" width="32" height="32" alt="moon-waxing-crescent"><br>
    <sub><code>moon-waxing-crescent</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/moon-waxing-gibbous.png" width="32" height="32" alt="moon-waxing-gibbous"><br>
    <sub><code>moon-waxing-gibbous</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/rainbow.png" width="32" height="32" alt="rainbow"><br>
    <sub><code>rainbow</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/raindrop.png" width="32" height="32" alt="raindrop"><br>
    <sub><code>raindrop</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px/refresh.png" width="32" height="32" alt="refresh"><br>
    <sub><code>refresh</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/snowflake.png" width="32" height="32" alt="snowflake"><br>
    <sub><code>snowflake</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/sun.png" width="32" height="32" alt="sun"><br>
    <sub><code>sun</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/sun-cloud.png" width="32" height="32" alt="sun-cloud"><br>
    <sub><code>sun-cloud</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/sun-cloud-lightning.png" width="32" height="32" alt="sun-cloud-lightning"><br>
    <sub><code>sun-cloud-lightning</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/sun-cloud-rain.png" width="32" height="32" alt="sun-cloud-rain"><br>
    <sub><code>sun-cloud-rain</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/sun-cloud-snow.png" width="32" height="32" alt="sun-cloud-snow"><br>
    <sub><code>sun-cloud-snow</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px/sun-cloud-wind.png" width="32" height="32" alt="sun-cloud-wind"><br>
    <sub><code>sun-cloud-wind</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/sun-fog.png" width="32" height="32" alt="sun-fog"><br>
    <sub><code>sun-fog</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/sun-low.png" width="32" height="32" alt="sun-low"><br>
    <sub><code>sun-low</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/sun-medium.png" width="32" height="32" alt="sun-medium"><br>
    <sub><code>sun-medium</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/sunrise.png" width="32" height="32" alt="sunrise"><br>
    <sub><code>sunrise</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/sunset.png" width="32" height="32" alt="sunset"><br>
    <sub><code>sunset</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/thermometer-cold.png" width="32" height="32" alt="thermometer-cold"><br>
    <sub><code>thermometer-cold</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px/thermometer-hot.png" width="32" height="32" alt="thermometer-hot"><br>
    <sub><code>thermometer-hot</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/thermometer-medium.png" width="32" height="32" alt="thermometer-medium"><br>
    <sub><code>thermometer-medium</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/tornado.png" width="32" height="32" alt="tornado"><br>
    <sub><code>tornado</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/umbrella.png" width="32" height="32" alt="umbrella"><br>
    <sub><code>umbrella</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/wind.png" width="32" height="32" alt="wind"><br>
    <sub><code>wind</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/wind-high.png" width="32" height="32" alt="wind-high"><br>
    <sub><code>wind-high</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px/windsock.png" width="32" height="32" alt="windsock"><br>
    <sub><code>windsock</code></sub>
  </td>
</tr>
</table>

## 🧑‍💻Development

### Build Commands
```bash
npm run build:icons      # Process and optimize SVGs
npm run build:components # Generate React/Vue components
npm run build:sprite     # Create SVG sprite
npm run build:fonts      # Generate webfonts (WOFF2, WOFF, TTF, EOT)
npm run build:png        # Export PNG images (multiple sizes + retina)
npm run build           # Full build pipeline
```

### Package Information
- **Bundle Sizes**: React (~96KB), Vue (~108KB), Sprite (~62KB)
- **Optimization**: 36.4% size reduction from original SVGs
- **Formats**: ESM + CommonJS with full TypeScript definitions
- **Multi-Format**: React/Vue components, SVG sprites, webfonts, PNG exports
- **PNG Sizes**: 16px, 24px, 32px, 48px, 64px, 128px, 256px (with @2x, @3x retina)
- **Font Formats**: WOFF2, WOFF, TTF, EOT for maximum browser support

## ⭐ License

This work is licensed under Creative Commons' Attribution-ShareAlike 3.0 United States ([CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/us/))
