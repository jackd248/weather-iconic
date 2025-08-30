// Weather Iconic - Showcase Icon Randomizer
// Randomly selects and displays icons in the hero showcase

// All available icon names for showcase
const SHOWCASE_ICON_NAMES = [
    'barometer', 'celsius', 'cloud-down', 'cloud-fog', 'cloud-rain-single', 'cloud-rain',
    'cloud-snow-single', 'cloud-snow', 'cloud-up', 'cloud-wind', 'cloud', 'clouds',
    'compass-east', 'compass-north-east', 'compass-north-west', 'compass-north',
    'compass-south-east', 'compass-south-west', 'compass-south', 'compass-west', 'compass',
    'fahrenheit', 'fog', 'hail', 'lightning', 'moon-cloud-lightning', 'moon-cloud-rain',
    'moon-cloud-snow', 'moon-cloud-wind', 'moon-cloud', 'moon-first-quarter', 'moon-fog',
    'moon-fullmoon', 'moon-last-quarter', 'moon-newmoon', 'moon-waning-crescent',
    'moon-waning-gibbous', 'moon-waxing-crescent', 'moon-waxing-gibbous', 'moon',
    'rainbow', 'raindrop', 'refresh', 'snowflake', 'sun-cloud-lightning', 'sun-cloud-rain',
    'sun-cloud-snow', 'sun-cloud-wind', 'sun-cloud', 'sun-fog', 'sun-low', 'sun-medium',
    'sun', 'sunrise', 'sunset', 'thermometer-cold', 'thermometer-hot', 'thermometer-medium',
    'tornado', 'umbrella', 'wind-high', 'wind', 'windsock'
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