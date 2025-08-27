// Weather Iconic - PNG Utilities
export const PNG_SIZES = [16, 24, 32, 48, 64, 128]
export const PNG_ICONS = ['barometer', 'celsius', 'cloud-down', 'cloud-fog', 'cloud-rain-single', 'cloud-rain', 'cloud-snow-single', 'cloud-snow', 'cloud-up', 'cloud-wind', 'cloud', 'clouds', 'compass-east', 'compass-north-east', 'compass-north-west', 'compass-north', 'compass-south-east', 'compass-south-west', 'compass-south', 'compass-west', 'compass', 'fahrenheit', 'fog', 'hail', 'lightning', 'moon-cloud-lightning', 'moon-cloud-rain', 'moon-cloud-snow', 'moon-cloud-wind', 'moon-cloud', 'moon-first-quarter', 'moon-fog', 'moon-fullmoon', 'moon-last-quarter', 'moon-newmoon', 'moon-waning-crescent', 'moon-waning-gibbous', 'moon-waxing-crescent', 'moon-waxing-gibbous', 'moon', 'rainbow', 'raindrop', 'refresh', 'snowflake', 'sun-cloud-lightning', 'sun-cloud-rain', 'sun-cloud-snow', 'sun-cloud-wind', 'sun-cloud', 'sun-fog', 'sun-low', 'sun-medium', 'sun', 'sunrise', 'sunset', 'thermometer-cold', 'thermometer-hot', 'thermometer-medium', 'tornado', 'umbrella', 'wind-high', 'wind', 'windsock']

export function getPNGPath(iconName, size = 24) {
  return `./png/${size}px/${iconName}.png`
}
