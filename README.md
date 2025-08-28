<div align="center">

![Icon](src/img/app.png)
# Weather Iconic

</div>

A minimal multi-color weather icon set containing 63 icons offered in multiple integration options.

## ✨Features
- 63 minimal weather icons
- **Multi-color support** for enhanced visual communication  
- TypeScript support with auto-completion
- Tree-shaking for optimal bundle sizes
- Accessibility features (ARIA labels)
- Customizable props (size, color, className)
- SVG sprites for performance optimization
- Webfont generation (WOFF2, WOFF, TTF, EOT)
- PNG exports in multiple sizes (16px to 128px) with retina support

> [!NOTE]
> Originally made for the weather app [temps](https://jackd248.github.io/temps/).

- [Features](#features)
- [Icons](#icons)
- [Installation](#installation)
- [Usage](#usage)
  - [React Components](#react-components)
  - [Vue Components](#vue-components)
  - [Webfonts](#webfonts)
  - [PNG Images](#png-images)
  - [SVG Sprites](#svg-sprites)
- [Multi-Color Support](#multi-color-support)
  - [Multi-Color PNGs](#multi-color-pngs)
  - [React Multi-Color](#react-multi-color)
  - [Vue Multi-Color](#vue-multi-color)
  - [CSS Multi-Color](#css-multi-color)
- [Development](#development)


## 🪄 Icons
All 63 weather icons with exemplary multi-color visual previews:

> [!NOTE]
> Icons are also available in single-color versions in the same packages.

<table>
<tr>
  <td align="center">
    <img src="dist/png/48px-multi-color/barometer-teal-gray.png" width="48" height="48" alt="barometer"><br>
    <sub style="display:inline-block;height:40px;"><code>barometer</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/celsius-teal-gray.png" width="48" height="48" alt="celsius"><br>
    <sub style="display:inline-block;height:40px;"><code>celsius</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/cloud-teal-gray.png" width="48" height="48" alt="cloud"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/cloud-down-teal-gray.png" width="48" height="48" alt="cloud-down"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-down</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/cloud-fog-teal-gray.png" width="48" height="48" alt="cloud-fog"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-fog</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/cloud-rain-teal-gray.png" width="48" height="48" alt="cloud-rain"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-rain</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/cloud-rain-single-teal-gray.png" width="48" height="48" alt="cloud-rain-single"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-rain-single</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-multi-color/cloud-snow-teal-gray.png" width="48" height="48" alt="cloud-snow"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-snow</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/cloud-snow-single-teal-gray.png" width="48" height="48" alt="cloud-snow-single"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-snow-single</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/cloud-up-teal-gray.png" width="48" height="48" alt="cloud-up"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-up</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/cloud-wind-teal-gray.png" width="48" height="48" alt="cloud-wind"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-wind</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/clouds-teal-gray.png" width="48" height="48" alt="clouds"><br>
    <sub style="display:inline-block;height:40px;"><code>clouds</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/compass-teal-gray.png" width="48" height="48" alt="compass"><br>
    <sub style="display:inline-block;height:40px;"><code>compass</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/compass-east-teal-gray.png" width="48" height="48" alt="compass-east"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-east</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-multi-color/compass-north-teal-gray.png" width="48" height="48" alt="compass-north"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-north</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/compass-north-east-teal-gray.png" width="48" height="48" alt="compass-north-east"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-north-east</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/compass-north-west-teal-gray.png" width="48" height="48" alt="compass-north-west"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-north-west</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/compass-south-teal-gray.png" width="48" height="48" alt="compass-south"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-south</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/compass-south-east-teal-gray.png" width="48" height="48" alt="compass-south-east"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-south-east</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/compass-south-west-teal-gray.png" width="48" height="48" alt="compass-south-west"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-south-west</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/compass-west-teal-gray.png" width="48" height="48" alt="compass-west"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-west</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-multi-color/fahrenheit-teal-gray.png" width="48" height="48" alt="fahrenheit"><br>
    <sub style="display:inline-block;height:40px;"><code>fahrenheit</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/fog-teal-gray.png" width="48" height="48" alt="fog"><br>
    <sub style="display:inline-block;height:40px;"><code>fog</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/hail-teal-gray.png" width="48" height="48" alt="hail"><br>
    <sub style="display:inline-block;height:40px;"><code>hail</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/lightning-teal-gray.png" width="48" height="48" alt="lightning"><br>
    <sub style="display:inline-block;height:40px;"><code>lightning</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-teal-gray.png" width="48" height="48" alt="moon"><br>
    <sub style="display:inline-block;height:40px;"><code>moon</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-cloud-teal-gray.png" width="48" height="48" alt="moon-cloud"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-cloud-lightning-teal-gray.png" width="48" height="48" alt="moon-cloud-lightning"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud-lightning</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-cloud-rain-teal-gray.png" width="48" height="48" alt="moon-cloud-rain"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud-rain</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-cloud-snow-teal-gray.png" width="48" height="48" alt="moon-cloud-snow"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud-snow</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-cloud-wind-teal-gray.png" width="48" height="48" alt="moon-cloud-wind"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud-wind</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-first-quarter-teal-gray.png" width="48" height="48" alt="moon-first-quarter"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-first-quarter</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-fog-teal-gray.png" width="48" height="48" alt="moon-fog"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-fog</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-fullmoon-teal-gray.png" width="48" height="48" alt="moon-fullmoon"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-fullmoon</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-last-quarter-teal-gray.png" width="48" height="48" alt="moon-last-quarter"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-last-quarter</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-newmoon-teal-gray.png" width="48" height="48" alt="moon-newmoon"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-newmoon</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-waning-crescent-teal-gray.png" width="48" height="48" alt="moon-waning-crescent"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-waning-crescent</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-waning-gibbous-teal-gray.png" width="48" height="48" alt="moon-waning-gibbous"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-waning-gibbous</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-waxing-crescent-teal-gray.png" width="48" height="48" alt="moon-waxing-crescent"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-waxing-crescent</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/moon-waxing-gibbous-teal-gray.png" width="48" height="48" alt="moon-waxing-gibbous"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-waxing-gibbous</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/rainbow-teal-gray.png" width="48" height="48" alt="rainbow"><br>
    <sub style="display:inline-block;height:40px;"><code>rainbow</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/raindrop-teal-gray.png" width="48" height="48" alt="raindrop"><br>
    <sub style="display:inline-block;height:40px;"><code>raindrop</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-multi-color/refresh-teal-gray.png" width="48" height="48" alt="refresh"><br>
    <sub style="display:inline-block;height:40px;"><code>refresh</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/snowflake-teal-gray.png" width="48" height="48" alt="snowflake"><br>
    <sub style="display:inline-block;height:40px;"><code>snowflake</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/sun-teal-gray.png" width="48" height="48" alt="sun"><br>
    <sub style="display:inline-block;height:40px;"><code>sun</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/sun-cloud-teal-gray.png" width="48" height="48" alt="sun-cloud"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/sun-cloud-lightning-teal-gray.png" width="48" height="48" alt="sun-cloud-lightning"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud-lightning</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/sun-cloud-rain-teal-gray.png" width="48" height="48" alt="sun-cloud-rain"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud-rain</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/sun-cloud-snow-teal-gray.png" width="48" height="48" alt="sun-cloud-snow"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud-snow</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-multi-color/sun-cloud-wind-teal-gray.png" width="48" height="48" alt="sun-cloud-wind"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud-wind</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/sun-fog-teal-gray.png" width="48" height="48" alt="sun-fog"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-fog</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/sun-low-teal-gray.png" width="48" height="48" alt="sun-low"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-low</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/sun-medium-teal-gray.png" width="48" height="48" alt="sun-medium"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-medium</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/sunrise-teal-gray.png" width="48" height="48" alt="sunrise"><br>
    <sub style="display:inline-block;height:40px;"><code>sunrise</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/sunset-teal-gray.png" width="48" height="48" alt="sunset"><br>
    <sub style="display:inline-block;height:40px;"><code>sunset</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/thermometer-cold-teal-gray.png" width="48" height="48" alt="thermometer-cold"><br>
    <sub style="display:inline-block;height:40px;"><code>thermometer-cold</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-multi-color/thermometer-hot-teal-gray.png" width="48" height="48" alt="thermometer-hot"><br>
    <sub style="display:inline-block;height:40px;"><code>thermometer-hot</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/thermometer-medium-teal-gray.png" width="48" height="48" alt="thermometer-medium"><br>
    <sub style="display:inline-block;height:40px;"><code>thermometer-medium</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/tornado-teal-gray.png" width="48" height="48" alt="tornado"><br>
    <sub style="display:inline-block;height:40px;"><code>tornado</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/umbrella-teal-gray.png" width="48" height="48" alt="umbrella"><br>
    <sub style="display:inline-block;height:40px;"><code>umbrella</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/wind-teal-gray.png" width="48" height="48" alt="wind"><br>
    <sub style="display:inline-block;height:40px;"><code>wind</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/wind-high-teal-gray.png" width="48" height="48" alt="wind-high"><br>
    <sub style="display:inline-block;height:40px;"><code>wind-high</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-multi-color/windsock-teal-gray.png" width="48" height="48" alt="windsock"><br>
    <sub style="display:inline-block;height:40px;"><code>windsock</code></sub>
  </td>
</tr>
</table>

## 🔥 Installation

```bash
npm install @weather-iconic/icons
```

## ⚡ Usage

### React Components

![React Usage](dist/png/24px/sun.png) ![React Usage](dist/png/24px/cloud-rain.png)

```jsx
import { WeatherSun, WeatherCloudRain } from '@weather-iconic/icons/react'

<WeatherSun size={32} color="orange" />
<WeatherCloudRain size={24} color="blue" title="Rainy weather" />
```

### Vue Components

![Vue Usage](dist/png/24px/sun.png)

```vue
<template>
  <WeatherSun :size="32" color="orange" />
</template>

<script setup>
import { WeatherSun } from '@weather-iconic/icons/vue'
</script>
```

### Webfonts

![Webfont Usage](dist/png/24px/sun.png) ![Webfont Usage](dist/png/24px/cloud-rain.png)

```css
@import '@weather-iconic/icons/fonts/css';

<i class="weather-sun"></i>
<i class="weather-cloud-rain weather-icon--lg"></i>
```

### PNG Images

![PNG Usage](dist/png/24px/sun.png) ![PNG Usage](dist/png/32px/sun.png) ![PNG Usage](dist/png/48px/sun.png)

```javascript
import { getPNGPath } from '@weather-iconic/icons/png-utils'

// Get PNG path
const iconPath = getPNGPath('sun', 24) // 24px standard
const iconPath48 = getPNGPath('sun', 48) // 48px standard

// HTML usage
<img src={getPNGPath('sun', 24)} alt="Sunny weather" />
<img src={getPNGPath('cloud-rain', 32)} alt="Rainy weather" />
```

### SVG Sprites

![Sprite Usage](dist/png/24px/sun.png) ![Sprite Usage](dist/png/24px/moon.png)

```javascript
import { loadSprite } from '@weather-iconic/icons/sprites'

// Load sprite into DOM
await loadSprite()

// Use sprite icons
<svg><use href="#weather-sun"></use></svg>
<svg><use href="#weather-moon"></use></svg>
```

## 🌈 Multi-Color Support

Weather Iconic supports multi-color icons for enhanced visual communication. Many weather icons contain multiple elements (e.g., thermometer mercury + body, sun + cloud) that can be styled with different colors.

### Multi-Color PNGs

Pre-generated multi-color PNG icons are available at 48px with a teal/gray color scheme:

<table>
<tr>
  <td align="center">
    <strong>Standard</strong><br>
    <img src="dist/png/48px/sun-cloud-lightning.png" width="48" height="48" alt="Standard"><br>
    <sub><code>sun-cloud-lightning.png</code></sub>
  </td>
  <td align="center">
    <strong>Multi-Color</strong><br>
    <img src="dist/png/48px-multi-color/sun-cloud-lightning-teal-gray.png" width="48" height="48" alt="Multi-Color"><br>
    <sub><code>sun-cloud-lightning-teal-gray.png</code></sub>
  </td>
</tr>
</table>

```javascript
import { getMultiColorPNGPath } from '@weather-iconic/icons/png-utils'

// Multi-color PNG variant
const multiColorIcon = getMultiColorPNGPath('sun-cloud-lightning', '-teal-gray')

// HTML usage
<img src={getMultiColorPNGPath('sun-cloud-lightning', '-teal-gray')} alt="Stormy weather" />
<img src={getMultiColorPNGPath('moon-cloud', '-teal-gray')} alt="Moon with cloud" />
```

**Available for all 63 icons** with consistent color scheme:
- **Teal/Gray**: `#80BBB2` primary, `#666666` secondary

### React Multi-Color

![React Multi-Color](dist/png/48px-multi-color/sun-cloud-lightning-teal-gray.png)

```jsx
import { WeatherSunCloudLightning } from '@weather-iconic/icons/react'

// Multi-color with custom colors
<WeatherSunCloudLightning 
  multiColor={true}
  primaryColor="#80BBB2"
  secondaryColor="#666666"
  size={48}
/>

// Multi-color with CSS custom properties
<WeatherSunCloudLightning 
  multiColor={true}
  size={48}
  style={{
    '--weather-primary-fill': '#80BBB2',
    '--weather-secondary-fill': '#666666'
  }}
/>
```

### Vue Multi-Color

![Vue Multi-Color](dist/png/48px-multi-color/sun-cloud-lightning-teal-gray.png)

```vue
<template>
  <!-- Multi-color with custom colors -->
  <WeatherSunCloudLightning 
    :multi-color="true"
    primary-color="#80BBB2"
    secondary-color="#666666"
    :size="48"
  />

  <!-- Multi-color with CSS custom properties -->
  <WeatherSunCloudLightning 
    :multi-color="true"
    :size="48"
    :style="{
      '--weather-primary-fill': '#80BBB2',
      '--weather-secondary-fill': '#666666'
    }"
  />
</template>

<script setup>
import { WeatherSunCloudLightning } from '@weather-iconic/icons/vue'
</script>
```

### CSS Multi-Color

![CSS Multi-Color](dist/png/48px-multi-color/sun-cloud-lightning-teal-gray.png)

```css
/* Include enhanced CSS for multi-color support */
@import '@weather-iconic/icons/weather-iconic-enhanced.css';

/* Basic multi-color usage with CSS custom properties */
.weather-multi-color {
  --weather-primary-fill: #80BBB2;   /* Primary element color */
  --weather-secondary-fill: #666666; /* Secondary element color */
}

```

#### HTML Usage
```html
<!-- Multi-color with CSS custom properties -->
<div class="weather-multi-color" style="--weather-primary-fill: #80BBB2; --weather-secondary-fill: #666666;">
  <svg><use href="#weather-sun-cloud-lightning"></use></svg>
</div>

<!-- Multi-color with utility classes -->
<div class="weather-multi-color weather-primary-teal">
  <svg><use href="#weather-sun-cloud-lightning"></use></svg>
</div>
```

#### Custom Utility Classes
```css
/* Primary color utilities */
.weather-primary-red    { --weather-primary-fill: #dc3545; }
.weather-primary-blue   { --weather-primary-fill: #007bff; }
.weather-primary-green  { --weather-primary-fill: #28a745; }
.weather-primary-yellow { --weather-primary-fill: #ffc107; }

/* Secondary color utilities */
.weather-secondary-red    { --weather-secondary-fill: #dc3545; }
.weather-secondary-blue   { --weather-secondary-fill: #007bff; }
.weather-secondary-green  { --weather-secondary-fill: #28a745; }
.weather-secondary-yellow { --weather-secondary-fill: #ffc107; }
```

#### Dark Mode Support
```css
/* Automatic dark mode detection */
@media (prefers-color-scheme: dark) {
  .weather-multi-color {
    --weather-secondary-fill: #cccccc;
  }
}

/* Manual dark mode toggle */
[data-theme="dark"] .weather-multi-color {
  --weather-secondary-fill: #cccccc;
}
```

> [!NOTE]
> Multi-color support works with icons that have multiple paths or groups. Single-path icons will use the primary color for the entire icon.

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
