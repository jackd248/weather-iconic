Weather Iconic
=====================

A minimal weather iconset containing 63 icons available as **React components**, **Vue components**, **optimized SVGs**, and **sprite collections**. 

Originally made for my weather app [temps](https://jackd248.github.io/temps/).

## Modern Usage

### Installation
```bash
npm install @weather-iconic/icons
```

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

### Legacy Usage (Font Icons)
```html
<span class="weather-sun"></span> sun
```

**Features:**
- ✅ TypeScript support with auto-completion
- ✅ Tree-shaking for optimal bundle sizes  
- ✅ Accessibility features (ARIA labels)
- ✅ Customizable props (size, color, className)
- ✅ SVG sprites for performance optimization

## Icon Gallery
All 63 weather icons with visual previews:

<table>
<tr>
  <td align="center">
    <img src="dist/png/32px/32px/barometer.png" width="32" height="32" alt="barometer"><br>
    <sub><b>barometer</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/32px/celsius.png" width="32" height="32" alt="celsius"><br>
    <sub><b>celsius</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/cloud.png" width="32" height="32" alt="cloud"><br>
    <sub><b>cloud</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/cloud-down.png" width="32" height="32" alt="cloud-down"><br>
    <sub><b>cloud-down</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/cloud-fog.png" width="32" height="32" alt="cloud-fog"><br>
    <sub><b>cloud-fog</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/cloud-rain.png" width="32" height="32" alt="cloud-rain"><br>
    <sub><b>cloud-rain</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/cloud-rain-single.png" width="32" height="32" alt="cloud-rain-single"><br>
    <sub><b>cloud-rain-single</b></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/32px/cloud-snow.png" width="32" height="32" alt="cloud-snow"><br>
    <sub><b>cloud-snow</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/cloud-snow-single.png" width="32" height="32" alt="cloud-snow-single"><br>
    <sub><b>cloud-snow-single</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/cloud-up.png" width="32" height="32" alt="cloud-up"><br>
    <sub><b>cloud-up</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/cloud-wind.png" width="32" height="32" alt="cloud-wind"><br>
    <sub><b>cloud-wind</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/clouds.png" width="32" height="32" alt="clouds"><br>
    <sub><b>clouds</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/compass.png" width="32" height="32" alt="compass"><br>
    <sub><b>compass</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/compass-east.png" width="32" height="32" alt="compass-east"><br>
    <sub><b>compass-east</b></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/32px/compass-north.png" width="32" height="32" alt="compass-north"><br>
    <sub><b>compass-north</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/compass-north-east.png" width="32" height="32" alt="compass-north-east"><br>
    <sub><b>compass-north-east</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/compass-north-west.png" width="32" height="32" alt="compass-north-west"><br>
    <sub><b>compass-north-west</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/compass-south.png" width="32" height="32" alt="compass-south"><br>
    <sub><b>compass-south</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/compass-south-east.png" width="32" height="32" alt="compass-south-east"><br>
    <sub><b>compass-south-east</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/compass-south-west.png" width="32" height="32" alt="compass-south-west"><br>
    <sub><b>compass-south-west</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/compass-west.png" width="32" height="32" alt="compass-west"><br>
    <sub><b>compass-west</b></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/32px/fahrenheit.png" width="32" height="32" alt="fahrenheit"><br>
    <sub><b>fahrenheit</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/fog.png" width="32" height="32" alt="fog"><br>
    <sub><b>fog</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/hail.png" width="32" height="32" alt="hail"><br>
    <sub><b>hail</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/lightning.png" width="32" height="32" alt="lightning"><br>
    <sub><b>lightning</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/moon.png" width="32" height="32" alt="moon"><br>
    <sub><b>moon</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/moon-cloud.png" width="32" height="32" alt="moon-cloud"><br>
    <sub><b>moon-cloud</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/moon-cloud-lightning.png" width="32" height="32" alt="moon-cloud-lightning"><br>
    <sub><b>moon-cloud-lightning</b></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/32px/moon-cloud-rain.png" width="32" height="32" alt="moon-cloud-rain"><br>
    <sub><b>moon-cloud-rain</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/moon-cloud-snow.png" width="32" height="32" alt="moon-cloud-snow"><br>
    <sub><b>moon-cloud-snow</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/moon-cloud-wind.png" width="32" height="32" alt="moon-cloud-wind"><br>
    <sub><b>moon-cloud-wind</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/moon-first-quarter.png" width="32" height="32" alt="moon-first-quarter"><br>
    <sub><b>moon-first-quarter</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/moon-fog.png" width="32" height="32" alt="moon-fog"><br>
    <sub><b>moon-fog</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/moon-fullmoon.png" width="32" height="32" alt="moon-fullmoon"><br>
    <sub><b>moon-fullmoon</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/moon-last-quarter.png" width="32" height="32" alt="moon-last-quarter"><br>
    <sub><b>moon-last-quarter</b></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/32px/moon-newmoon.png" width="32" height="32" alt="moon-newmoon"><br>
    <sub><b>moon-newmoon</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/moon-waning-crescent.png" width="32" height="32" alt="moon-waning-crescent"><br>
    <sub><b>moon-waning-crescent</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/moon-waning-gibbous.png" width="32" height="32" alt="moon-waning-gibbous"><br>
    <sub><b>moon-waning-gibbous</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/moon-waxing-crescent.png" width="32" height="32" alt="moon-waxing-crescent"><br>
    <sub><b>moon-waxing-crescent</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/moon-waxing-gibbous.png" width="32" height="32" alt="moon-waxing-gibbous"><br>
    <sub><b>moon-waxing-gibbous</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/rainbow.png" width="32" height="32" alt="rainbow"><br>
    <sub><b>rainbow</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/raindrop.png" width="32" height="32" alt="raindrop"><br>
    <sub><b>raindrop</b></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/32px/refresh.png" width="32" height="32" alt="refresh"><br>
    <sub><b>refresh</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/snowflake.png" width="32" height="32" alt="snowflake"><br>
    <sub><b>snowflake</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/sun.png" width="32" height="32" alt="sun"><br>
    <sub><b>sun</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/sun-cloud.png" width="32" height="32" alt="sun-cloud"><br>
    <sub><b>sun-cloud</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/sun-cloud-lightning.png" width="32" height="32" alt="sun-cloud-lightning"><br>
    <sub><b>sun-cloud-lightning</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/sun-cloud-rain.png" width="32" height="32" alt="sun-cloud-rain"><br>
    <sub><b>sun-cloud-rain</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/sun-cloud-snow.png" width="32" height="32" alt="sun-cloud-snow"><br>
    <sub><b>sun-cloud-snow</b></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/32px/sun-cloud-wind.png" width="32" height="32" alt="sun-cloud-wind"><br>
    <sub><b>sun-cloud-wind</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/sun-fog.png" width="32" height="32" alt="sun-fog"><br>
    <sub><b>sun-fog</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/sun-low.png" width="32" height="32" alt="sun-low"><br>
    <sub><b>sun-low</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/sun-medium.png" width="32" height="32" alt="sun-medium"><br>
    <sub><b>sun-medium</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/sunrise.png" width="32" height="32" alt="sunrise"><br>
    <sub><b>sunrise</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/sunset.png" width="32" height="32" alt="sunset"><br>
    <sub><b>sunset</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/thermometer-cold.png" width="32" height="32" alt="thermometer-cold"><br>
    <sub><b>thermometer-cold</b></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/32px/thermometer-hot.png" width="32" height="32" alt="thermometer-hot"><br>
    <sub><b>thermometer-hot</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/thermometer-medium.png" width="32" height="32" alt="thermometer-medium"><br>
    <sub><b>thermometer-medium</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/tornado.png" width="32" height="32" alt="tornado"><br>
    <sub><b>tornado</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/umbrella.png" width="32" height="32" alt="umbrella"><br>
    <sub><b>umbrella</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/wind.png" width="32" height="32" alt="wind"><br>
    <sub><b>wind</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/wind-high.png" width="32" height="32" alt="wind-high"><br>
    <sub><b>wind-high</b></sub>
  </td>
  <td align="center">
    <img src="dist/png/32px/windsock.png" width="32" height="32" alt="windsock"><br>
    <sub><b>windsock</b></sub>
  </td>
</tr>
</table>

## Development

### Build Commands
```bash
npm run build:icons      # Process and optimize SVGs
npm run build:components # Generate React/Vue components
npm run build:sprite     # Create SVG sprite
npm run build:fonts      # Generate webfonts (WOFF2, WOFF, TTF, EOT)
npm run build:png        # Export PNG images (multiple sizes + retina)
npm run build           # Full build pipeline
```

### Additional Usage Formats

#### Webfonts
```css
@import '@weather-iconic/icons/fonts/css';

<i class="weather-sun"></i>
<i class="weather-cloud-rain weather-icon--lg"></i>
```

#### PNG Images
```javascript
import { getPNGPath, generateSrcSet } from '@weather-iconic/icons/png-utils'

// Get PNG path
const iconPath = getPNGPath('sun', 24, 2) // 24px @2x

// Responsive images
<img src={getPNGPath('sun', 24)} 
     srcset={generateSrcSet('sun', 24)} 
     alt="Sunny weather" />
```

### Package Information
- **Bundle Sizes**: React (~96KB), Vue (~108KB), Sprite (~62KB)
- **Optimization**: 36.4% size reduction from original SVGs
- **Formats**: ESM + CommonJS with full TypeScript definitions
- **Multi-Format**: React/Vue components, SVG sprites, webfonts, PNG exports
- **PNG Sizes**: 16px, 24px, 32px, 48px, 64px, 128px, 256px (with @2x, @3x retina)
- **Font Formats**: WOFF2, WOFF, TTF, EOT for maximum browser support

## License

This work is licensed under Creative Commons' Attribution-ShareAlike 3.0 United States ([CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/us/))
