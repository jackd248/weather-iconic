// Weather Iconic - Showcase Icon Randomizer
// Randomly selects and displays icons in the hero showcase

const SHOWCASE_ICON_NAMES = [
    'barometer', 'celsius', 'cloud', 'cloud-alt', 'cloud-down', 'cloud-fog', 'cloud-hail', 'cloud-rain', 'cloud-rain-alt',
    'cloud-sleet', 'cloud-snow', 'cloud-snow-alt', 'cloud-up', 'cloud-wind', 'clouds', 'clouds-alt',
    'compass-east', 'compass-north', 'compass-north-east', 'compass-north-west',
    'compass-south', 'compass-south-east', 'compass-south-west', 'compass-west',
    'earthquake', 'fahrenheit', 'fire', 'flood', 'fog', 'humidity', 'hurricane',
    'lightning', 'moon', 'moon-cloud', 'moon-cloud-fog', 'moon-cloud-hail',
    'moon-cloud-lightning', 'moon-cloud-rain', 'moon-cloud-rain-alt', 'moon-cloud-sleet',
    'moon-cloud-snow', 'moon-cloud-snow-alt', 'moon-cloud-wind', 'moon-first-quarter', 'moon-fog',
    'moon-fullmoon', 'moon-last-quarter', 'moon-newmoon', 'moon-waning-crescent',
    'moon-waning-gibbous', 'moon-waxing-crescent', 'moon-waxing-gibbous',
    'moonrise', 'moonset', 'rainbow', 'raindrop', 'refresh', 'sandstorm', 'snowflake', 'star', 'stars',
    'sun', 'sun-cloud', 'sun-cloud-fog', 'sun-cloud-hail', 'sun-cloud-lightning', 'sun-cloud-rain',
    'sun-cloud-rain-alt', 'sun-cloud-sleet', 'sun-cloud-snow', 'sun-cloud-snow-alt', 'sun-cloud-wind',
    'sun-eclipse', 'sun-fog', 'sun-high', 'sun-low', 'sun-medium', 'sunrise', 'sunset',
    'thermometer-cold', 'thermometer-hot', 'thermometer-medium', 'tornado', 'umbrella',
    'warning', 'wind', 'wind-high', 'windsock'
];

// Multi-color configuration
const PRIMARY_COLOR = '#80BBB2';
const SECONDARY_COLOR = '#666666';

// Showcase grid configuration
const SHOWCASE_CONFIG = {
    large: 3,   // Number of large icons
    medium: 5,  // Number of medium icons  
    small: 6    // Number of small icons
};

// Shuffle array utility
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Generate random icon selection
function generateRandomIconSelection() {
    const shuffledIcons = shuffleArray(SHOWCASE_ICON_NAMES);
    const totalIcons = SHOWCASE_CONFIG.large + SHOWCASE_CONFIG.medium + SHOWCASE_CONFIG.small;
    
    return shuffledIcons.slice(0, totalIcons);
}

// Create SVG element for showcase icon
function createShowcaseIconSVG(iconName) {
    return `<svg viewBox="0 0 32 32" class="multi-color-icon" style="--weather-primary-fill: ${PRIMARY_COLOR}; --weather-secondary-fill: ${SECONDARY_COLOR};">
        <use xlink:href="./dist/sprites.svg#weather-${iconName}"></use>
    </svg>`;
}

// Initialize random showcase icons
function initializeRandomShowcase() {
    const selectedIcons = generateRandomIconSelection();
    let iconIndex = 0;
    
    // Update large icons (1-3)
    for (let i = 1; i <= SHOWCASE_CONFIG.large; i++) {
        const iconElement = document.querySelector(`.showcase-icon-${i}`);
        if (iconElement && selectedIcons[iconIndex]) {
            iconElement.innerHTML = createShowcaseIconSVG(selectedIcons[iconIndex]);
            iconIndex++;
        }
    }
    
    // Update medium icons (4-8)
    for (let i = 4; i <= 4 + SHOWCASE_CONFIG.medium - 1; i++) {
        const iconElement = document.querySelector(`.showcase-icon-${i}`);
        if (iconElement && selectedIcons[iconIndex]) {
            iconElement.innerHTML = createShowcaseIconSVG(selectedIcons[iconIndex]);
            iconIndex++;
        }
    }
    
    // Update small icons (9-14)
    for (let i = 9; i <= 9 + SHOWCASE_CONFIG.small - 1; i++) {
        const iconElement = document.querySelector(`.showcase-icon-${i}`);
        if (iconElement && selectedIcons[iconIndex]) {
            iconElement.innerHTML = createShowcaseIconSVG(selectedIcons[iconIndex]);
            iconIndex++;
        }
    }
    
    console.log('✨ Randomized showcase icons:', selectedIcons.slice(0, iconIndex));
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeRandomShowcase);
} else {
    initializeRandomShowcase();
}

// Export for manual use
window.randomizeShowcaseIcons = initializeRandomShowcase;