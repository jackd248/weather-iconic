/* ========================================
   WEATHER ICONIC - CONFIGURATION
   ======================================== */

// Application Configuration
window.WeatherIconic = window.WeatherIconic || {};

window.WeatherIconic.config = {
    // Icon names from the weather-iconic library
    iconNames: [
        'barometer', 'celsius', 'cloud-down', 'cloud-fog', 'cloud-rain-single', 'cloud-rain',
        'cloud-snow-single', 'cloud-snow', 'cloud-up', 'cloud-wind', 'cloud', 'clouds',
        'compass-east', 'compass-north-east', 'compass-north-west', 'compass-north',
        'compass-south-east', 'compass-south-west', 'compass-south', 'compass-west', 'compass',
        'fahrenheit', 'fog', 'hail', 'lightning', 'moon-cloud-lightning', 'moon-cloud-rain',
        'moon-cloud-snow', 'moon-cloud-wind', 'moon-cloud', 'moon-first-quarter', 'moon-fog',
        'moon-fullmoon', 'moon-last-quarter', 'moon-newmoon', 'moon-waning-crescent',
        'moon-waning-gibbous', 'moon-waxing-crescent', 'moon-waxing-gibbous', 'moon', 'rainbow',
        'raindrop', 'refresh', 'snowflake', 'sun-cloud-lightning', 'sun-cloud-rain',
        'sun-cloud-snow', 'sun-cloud-wind', 'sun-cloud', 'sun-fog', 'sun-low', 'sun-medium',
        'sun', 'sunrise', 'sunset', 'thermometer-cold', 'thermometer-hot', 'thermometer-medium',
        'tornado', 'umbrella', 'wind-high', 'wind', 'windsock'
    ],

    // Multi-color icons will be loaded dynamically from metadata
    multiColorIcons: [],

    // Default colors
    defaultColors: {
        primary: '#80BBB2',
        secondary: '#666666'
    },

    // API endpoints
    endpoints: {
        metadata: '../src/icons/metadata.json',
        sprites: '../dist/sprites.svg'
    },

    // Animation settings
    animations: {
        slideshowInterval: 3000,
        debounceDelay: 300
    },

    // Download settings
    downloads: {
        pngSizes: [64, 48, 32, 24, 16],
        githubReleasesUrl: 'https://github.com/your-username/weather-iconic/releases/latest'
    },

    // Slideshow icons (featured icons for homepage)
    featuredIcons: [
        'sun',
        'cloud-rain', 
        'moon-cloud',
        'snowflake',
        'lightning'
    ],

    // Weather example data
    weatherExamples: [
        {
            city: 'Berlin',
            temperature: '24°C',
            condition: 'Sunny',
            icon: 'sun',
            theme: 'sunny',
            color: '#FDB462'
        },
        {
            city: 'London',
            temperature: '18°C', 
            condition: 'Rainy',
            icon: 'cloud-rain',
            theme: 'rainy',
            color: '#80B1D3'
        },
        {
            city: 'Tokyo',
            temperature: '21°C',
            condition: 'Cloudy', 
            icon: 'cloud',
            theme: 'cloudy',
            color: '#BEBADA'
        },
        {
            city: 'Oslo',
            temperature: '-2°C',
            condition: 'Snowy',
            icon: 'cloud-snow', 
            theme: 'snowy',
            color: '#B3CDE3'
        }
    ],

    // Utility functions
    utils: {
        toPascalCase: (str) => {
            return str
                .split(/[-_]/)
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join('');
        },
        
        toKebabCase: (str) => {
            return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
        },
        
        formatFileSize: (bytes) => {
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            if (bytes === 0) return '0 Bytes';
            const i = Math.floor(Math.log(bytes) / Math.log(1024));
            return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
        }
    }
};