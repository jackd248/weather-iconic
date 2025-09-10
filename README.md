<div align="center">

![Icon](src/img/app.png)
# Weather Iconic

<!-- NPM Badges -->
[![npm version](https://img.shields.io/npm/v/weather-iconic.svg)](https://www.npmjs.com/package/weather-iconic)
[![npm downloads](https://img.shields.io/npm/dm/weather-iconic.svg)](https://www.npmjs.com/package/weather-iconic)
[![npm total downloads](https://img.shields.io/npm/dt/weather-iconic.svg)](https://www.npmjs.com/package/weather-iconic)
[![License: CC BY-SA 3.0](https://img.shields.io/badge/License-CC%20BY--SA%203.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/3.0/)
[![minified size](https://img.shields.io/bundlephobia/minzip/weather-iconic.svg)](https://bundlephobia.com/package/weather-iconic)

</div>

A minimal multi-color weather icon set containing 100 icons offered in multiple integration options.

## ✨Features
- 100 minimal weather icons
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
  - [Webfonts](#webfonts)
  - [SVG Sprites](#svg-sprites)
- [Multi-Color Support](#multi-color-support)
  - [CSS Multi-Color](#css-multi-color)
- [Development](#development)


## 🪄 Icons
All 100 weather icons with exemplary multi-color visual previews:

> [!TIP]
> Search for specific icons within the landing page: https://jackd248.github.io/weather-iconic/

> [!NOTE]
> Icons are also available in single-color versions in the same packages.

<table>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/barometer.png" width="48" height="48" alt="barometer"><br>
    <sub style="display:inline-block;height:40px;"><code>barometer</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/celsius.png" width="48" height="48" alt="celsius"><br>
    <sub style="display:inline-block;height:40px;"><code>celsius</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/cloud-alt.png" width="48" height="48" alt="cloud-alt"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-alt</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/cloud-down.png" width="48" height="48" alt="cloud-down"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-down</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/cloud-fog.png" width="48" height="48" alt="cloud-fog"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-fog</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/cloud-hail.png" width="48" height="48" alt="cloud-hail"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-hail</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/cloud-haze.png" width="48" height="48" alt="cloud-haze"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-haze</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/cloud-rain-alt.png" width="48" height="48" alt="cloud-rain-alt"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-rain-alt</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/cloud-rain.png" width="48" height="48" alt="cloud-rain"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-rain</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/cloud-sleet.png" width="48" height="48" alt="cloud-sleet"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-sleet</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/cloud-smog.png" width="48" height="48" alt="cloud-smog"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-smog</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/cloud-snow-alt.png" width="48" height="48" alt="cloud-snow-alt"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-snow-alt</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/cloud-snow.png" width="48" height="48" alt="cloud-snow"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-snow</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/cloud-up.png" width="48" height="48" alt="cloud-up"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-up</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/cloud-wind.png" width="48" height="48" alt="cloud-wind"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud-wind</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/cloud.png" width="48" height="48" alt="cloud"><br>
    <sub style="display:inline-block;height:40px;"><code>cloud</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/clouds-alt.png" width="48" height="48" alt="clouds-alt"><br>
    <sub style="display:inline-block;height:40px;"><code>clouds-alt</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/clouds.png" width="48" height="48" alt="clouds"><br>
    <sub style="display:inline-block;height:40px;"><code>clouds</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/compass-east.png" width="48" height="48" alt="compass-east"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-east</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/compass-north-east.png" width="48" height="48" alt="compass-north-east"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-north-east</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/compass-north-west.png" width="48" height="48" alt="compass-north-west"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-north-west</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/compass-north.png" width="48" height="48" alt="compass-north"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-north</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/compass-south-east.png" width="48" height="48" alt="compass-south-east"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-south-east</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/compass-south-west.png" width="48" height="48" alt="compass-south-west"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-south-west</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/compass-south.png" width="48" height="48" alt="compass-south"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-south</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/compass-west.png" width="48" height="48" alt="compass-west"><br>
    <sub style="display:inline-block;height:40px;"><code>compass-west</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/date.png" width="48" height="48" alt="date"><br>
    <sub style="display:inline-block;height:40px;"><code>date</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/earthquake.png" width="48" height="48" alt="earthquake"><br>
    <sub style="display:inline-block;height:40px;"><code>earthquake</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/fahrenheit.png" width="48" height="48" alt="fahrenheit"><br>
    <sub style="display:inline-block;height:40px;"><code>fahrenheit</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/fire.png" width="48" height="48" alt="fire"><br>
    <sub style="display:inline-block;height:40px;"><code>fire</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/flood.png" width="48" height="48" alt="flood"><br>
    <sub style="display:inline-block;height:40px;"><code>flood</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/fog.png" width="48" height="48" alt="fog"><br>
    <sub style="display:inline-block;height:40px;"><code>fog</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/humidity.png" width="48" height="48" alt="humidity"><br>
    <sub style="display:inline-block;height:40px;"><code>humidity</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/hurricane.png" width="48" height="48" alt="hurricane"><br>
    <sub style="display:inline-block;height:40px;"><code>hurricane</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/info.png" width="48" height="48" alt="info"><br>
    <sub style="display:inline-block;height:40px;"><code>info</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/lightning.png" width="48" height="48" alt="lightning"><br>
    <sub style="display:inline-block;height:40px;"><code>lightning</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-cloud-fog.png" width="48" height="48" alt="moon-cloud-fog"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud-fog</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-cloud-hail.png" width="48" height="48" alt="moon-cloud-hail"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud-hail</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-cloud-haze.png" width="48" height="48" alt="moon-cloud-haze"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud-haze</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-cloud-lightning.png" width="48" height="48" alt="moon-cloud-lightning"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud-lightning</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-cloud-rain-alt.png" width="48" height="48" alt="moon-cloud-rain-alt"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud-rain-alt</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-cloud-rain.png" width="48" height="48" alt="moon-cloud-rain"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud-rain</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-cloud-sleet.png" width="48" height="48" alt="moon-cloud-sleet"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud-sleet</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-cloud-snow-alt.png" width="48" height="48" alt="moon-cloud-snow-alt"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud-snow-alt</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-cloud-snow.png" width="48" height="48" alt="moon-cloud-snow"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud-snow</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-cloud-wind.png" width="48" height="48" alt="moon-cloud-wind"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud-wind</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-cloud.png" width="48" height="48" alt="moon-cloud"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-cloud</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-first-quarter.png" width="48" height="48" alt="moon-first-quarter"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-first-quarter</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-fog.png" width="48" height="48" alt="moon-fog"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-fog</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-fullmoon.png" width="48" height="48" alt="moon-fullmoon"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-fullmoon</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-last-quarter.png" width="48" height="48" alt="moon-last-quarter"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-last-quarter</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-newmoon.png" width="48" height="48" alt="moon-newmoon"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-newmoon</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-waning-crescent.png" width="48" height="48" alt="moon-waning-crescent"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-waning-crescent</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-waning-gibbous.png" width="48" height="48" alt="moon-waning-gibbous"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-waning-gibbous</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-waxing-crescent.png" width="48" height="48" alt="moon-waxing-crescent"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-waxing-crescent</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon-waxing-gibbous.png" width="48" height="48" alt="moon-waxing-gibbous"><br>
    <sub style="display:inline-block;height:40px;"><code>moon-waxing-gibbous</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moon.png" width="48" height="48" alt="moon"><br>
    <sub style="display:inline-block;height:40px;"><code>moon</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moonrise.png" width="48" height="48" alt="moonrise"><br>
    <sub style="display:inline-block;height:40px;"><code>moonrise</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/moonset.png" width="48" height="48" alt="moonset"><br>
    <sub style="display:inline-block;height:40px;"><code>moonset</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/na.png" width="48" height="48" alt="na"><br>
    <sub style="display:inline-block;height:40px;"><code>na</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/pollen.png" width="48" height="48" alt="pollen"><br>
    <sub style="display:inline-block;height:40px;"><code>pollen</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/rainbow.png" width="48" height="48" alt="rainbow"><br>
    <sub style="display:inline-block;height:40px;"><code>rainbow</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/raindrop.png" width="48" height="48" alt="raindrop"><br>
    <sub style="display:inline-block;height:40px;"><code>raindrop</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/refresh.png" width="48" height="48" alt="refresh"><br>
    <sub style="display:inline-block;height:40px;"><code>refresh</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sandstorm.png" width="48" height="48" alt="sandstorm"><br>
    <sub style="display:inline-block;height:40px;"><code>sandstorm</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/shooting-star.png" width="48" height="48" alt="shooting-star"><br>
    <sub style="display:inline-block;height:40px;"><code>shooting-star</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/snowflake.png" width="48" height="48" alt="snowflake"><br>
    <sub style="display:inline-block;height:40px;"><code>snowflake</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/star.png" width="48" height="48" alt="star"><br>
    <sub style="display:inline-block;height:40px;"><code>star</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/stars.png" width="48" height="48" alt="stars"><br>
    <sub style="display:inline-block;height:40px;"><code>stars</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-cloud-fog.png" width="48" height="48" alt="sun-cloud-fog"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud-fog</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-cloud-hail.png" width="48" height="48" alt="sun-cloud-hail"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud-hail</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-cloud-haze.png" width="48" height="48" alt="sun-cloud-haze"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud-haze</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-cloud-lightning.png" width="48" height="48" alt="sun-cloud-lightning"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud-lightning</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-cloud-rain-alt.png" width="48" height="48" alt="sun-cloud-rain-alt"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud-rain-alt</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-cloud-rain.png" width="48" height="48" alt="sun-cloud-rain"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud-rain</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-cloud-sleet.png" width="48" height="48" alt="sun-cloud-sleet"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud-sleet</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-cloud-snow-alt.png" width="48" height="48" alt="sun-cloud-snow-alt"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud-snow-alt</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-cloud-snow.png" width="48" height="48" alt="sun-cloud-snow"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud-snow</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-cloud-wind.png" width="48" height="48" alt="sun-cloud-wind"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud-wind</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-cloud.png" width="48" height="48" alt="sun-cloud"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-cloud</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-eclipse.png" width="48" height="48" alt="sun-eclipse"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-eclipse</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-fog.png" width="48" height="48" alt="sun-fog"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-fog</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-high.png" width="48" height="48" alt="sun-high"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-high</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-low.png" width="48" height="48" alt="sun-low"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-low</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun-medium.png" width="48" height="48" alt="sun-medium"><br>
    <sub style="display:inline-block;height:40px;"><code>sun-medium</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sun.png" width="48" height="48" alt="sun"><br>
    <sub style="display:inline-block;height:40px;"><code>sun</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sunrise.png" width="48" height="48" alt="sunrise"><br>
    <sub style="display:inline-block;height:40px;"><code>sunrise</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/sunset.png" width="48" height="48" alt="sunset"><br>
    <sub style="display:inline-block;height:40px;"><code>sunset</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/thermometer-cold.png" width="48" height="48" alt="thermometer-cold"><br>
    <sub style="display:inline-block;height:40px;"><code>thermometer-cold</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/thermometer-freeze.png" width="48" height="48" alt="thermometer-freeze"><br>
    <sub style="display:inline-block;height:40px;"><code>thermometer-freeze</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/thermometer-heat.png" width="48" height="48" alt="thermometer-heat"><br>
    <sub style="display:inline-block;height:40px;"><code>thermometer-heat</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/thermometer-hot.png" width="48" height="48" alt="thermometer-hot"><br>
    <sub style="display:inline-block;height:40px;"><code>thermometer-hot</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/thermometer-medium.png" width="48" height="48" alt="thermometer-medium"><br>
    <sub style="display:inline-block;height:40px;"><code>thermometer-medium</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/time.png" width="48" height="48" alt="time"><br>
    <sub style="display:inline-block;height:40px;"><code>time</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/tornado.png" width="48" height="48" alt="tornado"><br>
    <sub style="display:inline-block;height:40px;"><code>tornado</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/umbrella.png" width="48" height="48" alt="umbrella"><br>
    <sub style="display:inline-block;height:40px;"><code>umbrella</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/warning.png" width="48" height="48" alt="warning"><br>
    <sub style="display:inline-block;height:40px;"><code>warning</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/wind-high.png" width="48" height="48" alt="wind-high"><br>
    <sub style="display:inline-block;height:40px;"><code>wind-high</code></sub>
  </td>
</tr>
<tr>
  <td align="center">
    <img src="dist/png/48px-teal-gray/wind.png" width="48" height="48" alt="wind"><br>
    <sub style="display:inline-block;height:40px;"><code>wind</code></sub>
  </td>
  <td align="center">
    <img src="dist/png/48px-teal-gray/windsock.png" width="48" height="48" alt="windsock"><br>
    <sub style="display:inline-block;height:40px;"><code>windsock</code></sub>
  </td>
  <td align="center"></td>
  <td align="center"></td>
  <td align="center"></td>
  <td align="center"></td>
  <td align="center"></td>
</tr>
</table>

## 🔥 Installation

```bash
npm install weather-iconic
```

## ⚡ Usage

### Webfonts

![Webfont Usage](dist/png/32px-black/sun.png) ![Webfont Usage](dist/png/32px-black/cloud-rain.png)

```html
<!-- Include the CSS -->
<link rel="stylesheet" href="node_modules/weather-iconic/dist/weather-iconic.css">

<!-- Use icons with proper classes -->
<i class="weather weather-sun"></i>
<i class="weather weather-cloud-rain weather-icon--lg"></i>
```

> [!TIP]
> See the [CodePen example](https://codepen.io/knrd/pen/bNVmbVG) for more details.

### SVG Sprites

![Sprite Usage](dist/png/32px-black/sun.png) ![Sprite Usage](dist/png/32px-black/moon.png)

```html
<!-- Use sprite icons directly -->
<svg width="32" height="32">
  <use xlink:href="/path/to/sprites.svg#weather-sun"></use>
</svg>
<svg width="32" height="32">
  <use xlink:href="/path/to/sprites.svg#weather-moon"></use>
</svg>
```

## 🌈 Multi-Color Support

Weather Iconic supports multi-color icons for enhanced visual communication. Many weather icons contain multiple elements (e.g., thermometer mercury + body, sun + cloud) that can be styled with different colors.

> [!TIP]
> **Color Philosophy**: The primary color (`--weather-primary-fill`) is used for **highlight elements** like lightning bolts, sun rays, or thermometer mercury. The secondary color (`--weather-secondary-fill`) serves as the **base color** for clouds, thermometer bodies, and single-element icons. This creates a natural visual hierarchy where important elements stand out.

### CSS Multi-Color

![CSS Multi-Color](dist/png/48px-teal-gray/sun-cloud-lightning.png)

```html
<!-- Include enhanced CSS for multi-color support -->
<link rel="stylesheet" href="node_modules/weather-iconic/dist/weather-iconic-enhanced.css">
```

```css
/* Basic multi-color usage with CSS custom properties */
.weather-multi-color {
  --weather-primary-fill: #80BBB2;   /* Highlight color (lightning, sun rays, mercury) */
  --weather-secondary-fill: #666666; /* Base color (clouds, bodies, single elements) */
}
```

#### HTML Usage
```html
<!-- Multi-color with CSS custom properties -->
<div class="weather-multi-color" style="--weather-primary-fill: #80BBB2; --weather-secondary-fill: #666666;">
  <svg><use xlink:href="/path/to/sprites.svg#weather-sun-cloud-lightning"></use></svg>
</div>

<!-- Multi-color with utility classes -->
<div class="weather-multi-color weather-primary-teal">
  <svg><use xlink:href="/path/to/sprites.svg#weather-sun-cloud-lightning"></use></svg>
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

### Testing

```bash
# open test page
cd tests
npm install
open index.html
```

### Package Information
- **Bundle Sizes**: SVG Sprite (~189KB), Webfonts (~100KB), JS Bundles (~14KB)
- **Total Package**: ~390KB (optimized distribution without PNG assets)
- **Formats**: SVG sprites, webfonts with TypeScript definitions, ES/CJS modules
- **Font Formats**: WOFF2, WOFF, TTF, EOT for maximum browser support
- **Node.js**: Requires Node.js >=16.0.0

## ⭐ License

This work is licensed under Creative Commons' Attribution-ShareAlike 3.0 United States ([CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/us/))
