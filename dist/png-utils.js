// Weather Iconic - PNG Utilities
export const PNG_SIZES = [32, 48, 64, 128]
export const PNG_ICONS = ['barometer', 'celsius', 'cloud-alt', 'cloud-down', 'cloud-fog', 'cloud-hail', 'cloud-haze', 'cloud-rain-alt', 'cloud-rain', 'cloud-sleet', 'cloud-smog', 'cloud-snow-alt', 'cloud-snow', 'cloud-up', 'cloud-wind', 'cloud', 'clouds-alt', 'clouds', 'compass-east', 'compass-north-east', 'compass-north-west', 'compass-north', 'compass-south-east', 'compass-south-west', 'compass-south', 'compass-west', 'date', 'earthquake', 'fahrenheit', 'fire', 'flood', 'fog', 'humidity', 'hurricane', 'info', 'lightning', 'moon-cloud-fog', 'moon-cloud-hail', 'moon-cloud-haze', 'moon-cloud-lightning', 'moon-cloud-rain-alt', 'moon-cloud-rain', 'moon-cloud-sleet', 'moon-cloud-snow-alt', 'moon-cloud-snow', 'moon-cloud-wind', 'moon-cloud', 'moon-first-quarter', 'moon-fog', 'moon-fullmoon', 'moon-last-quarter', 'moon-newmoon', 'moon-waning-crescent', 'moon-waning-gibbous', 'moon-waxing-crescent', 'moon-waxing-gibbous', 'moon', 'moonrise', 'moonset', 'na', 'pollen', 'rainbow', 'raindrop', 'refresh', 'sandstorm', 'shooting-star', 'snowflake', 'star', 'stars', 'sun-cloud-fog', 'sun-cloud-hail', 'sun-cloud-haze', 'sun-cloud-lightning', 'sun-cloud-rain-alt', 'sun-cloud-rain', 'sun-cloud-sleet', 'sun-cloud-snow-alt', 'sun-cloud-snow', 'sun-cloud-wind', 'sun-cloud', 'sun-eclipse', 'sun-fog', 'sun-high', 'sun-low', 'sun-medium', 'sun', 'sunrise', 'sunset', 'thermometer-cold', 'thermometer-freeze', 'thermometer-heat', 'thermometer-hot', 'thermometer-medium', 'time', 'tornado', 'umbrella', 'warning', 'wind-high', 'wind', 'windsock']
export const COLOR_VARIANTS = ['-black', '-white', '-teal-gray']

export function getPNGPath(iconName, size = 32, variant = '-black') {
  return `./png/${size}px${variant}/${iconName}.png`
}

export function getAvailableColorVariants() {
  return [
  {
    "suffix": "-black",
    "primaryColor": "#000000",
    "secondaryColor": "#000000",
    "label": "Black"
  },
  {
    "suffix": "-white",
    "primaryColor": "#ffffff",
    "secondaryColor": "#ffffff",
    "label": "White"
  },
  {
    "suffix": "-teal-gray",
    "primaryColor": "#80BBB2",
    "secondaryColor": "#666666",
    "label": "Multi-Color (Teal/Gray)"
  }
]
}
