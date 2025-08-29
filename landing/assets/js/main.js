// Icon names from the weather-iconic library
const ICON_NAMES = [
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
];

// Multi-color icons will be loaded dynamically from metadata
let MULTI_COLOR_ICONS = [];
let ICON_METADATA = null;

// Load icon metadata to get accurate multi-color information
async function loadIconMetadata() {
    try {
        const config = window.WeatherIconic?.config;
        const metadataUrl = config?.endpoints?.metadata || './src/icons/metadata.json';
        const response = await fetch(metadataUrl);
        const metadata = await response.json();
        ICON_METADATA = metadata;
        MULTI_COLOR_ICONS = metadata.multiColorIcons || [];
        
        console.log('📊 Loaded metadata:', {
            totalIcons: metadata.totalIcons,
            multiColorIcons: MULTI_COLOR_ICONS.length,
            multiColorList: MULTI_COLOR_ICONS
        });
        
        return metadata;
    } catch (error) {
        console.warn('Failed to load icon metadata, using fallback list');
        // Fallback list if metadata loading fails
        MULTI_COLOR_ICONS = [
            'barometer', 'celsius', 'cloud-down', 'cloud-fog', 'cloud-rain-single', 
            'cloud-rain', 'cloud-snow-single', 'cloud-snow', 'cloud-up', 'cloud-wind',
            'moon-cloud-lightning', 'moon-cloud-rain', 'moon-cloud-snow', 'moon-cloud-wind', 
            'moon-cloud', 'sun-cloud-lightning', 'sun-cloud-rain', 'sun-cloud-snow', 
            'sun-cloud-wind', 'sun-cloud', 'sun-fog', 'thermometer-cold', 'thermometer-hot', 
            'thermometer-medium'
        ];
        return null;
    }
}

// DOM Elements
let iconGrid;
let searchInput;
let primaryColorInput;
let secondaryColorInput;
let resetColorsBtn;

// State
let currentPrimaryColor = '#80BBB2';
let currentSecondaryColor = '#666666';
let filteredIcons = [...ICON_NAMES];

// Initialize colors on load
let colorsInitialized = false;

// Cache for loaded SVG content
let svgCache = {};
let spriteLoadPromise = null;

// Load sprite content once
function loadSpriteContent() {
    if (spriteLoadPromise) {
        return spriteLoadPromise;
    }
    
    const config = window.WeatherIconic?.config;
    const spritesUrl = config?.endpoints?.sprites || './dist/sprites.svg';
    spriteLoadPromise = fetch(spritesUrl)
        .then(response => response.text())
        .then(svgText => {
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
            
            // Cache all icon contents
            ICON_NAMES.forEach(iconName => {
                const iconElement = svgDoc.getElementById(`weather-${iconName}`);
                if (iconElement) {
                    svgCache[iconName] = iconElement.innerHTML;
                }
            });
            
            return svgCache;
        })
        .catch(error => {
            console.error('Error loading sprite:', error);
            return {};
        });
    
    return spriteLoadPromise;
}

// Load icon content into SVG element
function loadIconContent(iconItem, iconName) {
    const svg = iconItem.querySelector('.icon-svg');
    
    loadSpriteContent().then(() => {
        if (svgCache[iconName]) {
            svg.innerHTML = svgCache[iconName];
            applyIconColors(iconItem, iconName);
        }
    });
}

// Promise version for batch loading
function loadIconPromise(iconName) {
    return loadSpriteContent().then(() => {
        return svgCache[iconName] || null;
    });
}

// Apply colors to a specific icon
function applyIconColors(iconItem, iconName) {
    const svg = iconItem.querySelector('.icon-svg');
    const groups = svg.querySelectorAll('g');
    const paths = svg.querySelectorAll('path');
    const isMultiColor = MULTI_COLOR_ICONS.includes(iconName);
    
    // Log multi-color icons for debugging
    if (isMultiColor) {
        console.log(`🎨 Applying colors to ${iconName}:`, {
            isMultiColor,
            groupCount: groups.length,
            pathCount: paths.length,
            primaryColor: currentPrimaryColor,
            secondaryColor: currentSecondaryColor,
            appliedToGroups: isMultiColor && groups.length > 1 ? 'Yes' : 'No'
        });
    }
    
    if (isMultiColor && groups.length > 1) {
        // Apply different colors to different groups
        groups.forEach((group, index) => {
            const groupPaths = group.querySelectorAll('path');
            const color = index === 0 ? currentPrimaryColor : currentSecondaryColor;
            
            groupPaths.forEach(path => {
                path.setAttribute('fill', color);
                path.style.fill = color; // Force style as backup
            });
        });
    } else {
        // Single color for all paths
        paths.forEach(path => {
            path.setAttribute('fill', currentPrimaryColor);
            path.style.fill = currentPrimaryColor; // Force style as backup
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    // Load metadata first to get accurate multi-color information
    await loadIconMetadata();
    
    initializeElements();
    setupEventListeners();
    loadIcons();
    setupTabSwitching();
});

function initializeElements() {
    iconGrid = document.getElementById('iconGrid');
    searchInput = document.getElementById('search');
    primaryColorInput = document.getElementById('primaryColor');
    secondaryColorInput = document.getElementById('secondaryColor');
    resetColorsBtn = document.getElementById('resetColors');
    
    // Set initial color values
    primaryColorInput.value = currentPrimaryColor;
    secondaryColorInput.value = currentSecondaryColor;
}

function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Color picker functionality
    primaryColorInput.addEventListener('change', handlePrimaryColorChange);
    secondaryColorInput.addEventListener('change', handleSecondaryColorChange);
    
    // Reset colors
    resetColorsBtn.addEventListener('click', resetColors);
    
    // Debug functionality
    const debugBtn = document.getElementById('debugColors');
    if (debugBtn) {
        debugBtn.addEventListener('click', debugColors);
    }
}

function setupTabSwitching() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

function loadIcons() {
    showLoading();
    
    // Simulate loading time for better UX
    setTimeout(() => {
        renderIcons();
        hideLoading();
    }, 500);
}

function showLoading() {
    iconGrid.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
}

function hideLoading() {
    const loading = iconGrid.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

function renderIcons() {
    iconGrid.innerHTML = '';
    
    if (filteredIcons.length === 0) {
        iconGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-secondary);">
                No icons found matching your search.
            </div>
        `;
        return;
    }
    
    filteredIcons.forEach(iconName => {
        const iconItem = createIconItem(iconName);
        iconGrid.appendChild(iconItem);
    });
    
    // Apply colors after all icons are loaded
    Promise.all(filteredIcons.map(iconName => loadIconPromise(iconName))).then(() => {
        updateIconColors();
        if (!colorsInitialized) {
            colorsInitialized = true;
        }
    });
}

function createIconItem(iconName) {
    const item = document.createElement('div');
    item.className = 'icon-item';
    item.setAttribute('data-icon', iconName);
    
    const isMultiColor = MULTI_COLOR_ICONS.includes(iconName);
    if (isMultiColor) {
        item.classList.add('multi-color');
    } else {
        item.classList.add('single-color');
    }
    
    item.innerHTML = `
        <svg viewBox="0 0 32 32" class="icon-svg">
            <!-- SVG content will be loaded dynamically -->
        </svg>
        <div class="icon-name">${iconName}</div>
        <div class="download-actions">
            <button class="download-btn" title="Download SVG" onclick="downloadIcon('${iconName}', 'svg')">
                SVG
            </button>
            <button class="download-btn" title="Download PNG" onclick="downloadIcon('${iconName}', 'png')">
                PNG
            </button>
        </div>
    `;
    
    // Load the actual SVG content
    loadIconContent(item, iconName);
    
    return item;
}

function handleSearch(event) {
    const query = event.target.value.toLowerCase().trim();
    
    if (query === '') {
        filteredIcons = [...ICON_NAMES];
    } else {
        filteredIcons = ICON_NAMES.filter(iconName => 
            iconName.toLowerCase().includes(query)
        );
    }
    
    renderIcons();
}

function handlePrimaryColorChange(event) {
    currentPrimaryColor = event.target.value;
    updateIconColors();
}

function handleSecondaryColorChange(event) {
    currentSecondaryColor = event.target.value;
    updateIconColors();
}

function updateIconColors() {
    const root = document.documentElement;
    root.style.setProperty('--icon-primary-color', currentPrimaryColor);
    root.style.setProperty('--icon-secondary-color', currentSecondaryColor);
    
    // Also update CSS variables for backward compatibility
    root.style.setProperty('--primary-fill', currentPrimaryColor);
    root.style.setProperty('--secondary-fill', currentSecondaryColor);
    
    console.log('Updating icon colors:', currentPrimaryColor, currentSecondaryColor);
    
    // Apply colors directly to all loaded icons
    const iconItems = document.querySelectorAll('.icon-item');
    iconItems.forEach(item => {
        const iconName = item.getAttribute('data-icon');
        const svg = item.querySelector('.icon-svg');
        if (svg && svg.innerHTML.trim()) {
            applyIconColors(item, iconName);
        }
    });
}

function resetColors() {
    currentPrimaryColor = '#80BBB2';
    currentSecondaryColor = '#666666';
    
    primaryColorInput.value = currentPrimaryColor;
    secondaryColorInput.value = currentSecondaryColor;
    
    updateIconColors();
}

function debugColors() {
    console.log('=== DEBUG INFO ===');
    console.log('Current colors:', currentPrimaryColor, currentSecondaryColor);
    console.log('Multi-color icons loaded:', MULTI_COLOR_ICONS.length);
    console.log('Multi-color list:', MULTI_COLOR_ICONS);
    
    if (ICON_METADATA) {
        console.log('Metadata stats:', {
            totalIcons: ICON_METADATA.totalIcons,
            multiColorCount: MULTI_COLOR_ICONS.length,
            buildDate: ICON_METADATA.buildDate
        });
    }
    
    const iconItems = document.querySelectorAll('.icon-item');
    console.log('Total icon items:', iconItems.length);
    
    // Check a few multi-color icons specifically
    const multiColorSample = ['sun-cloud', 'cloud-rain', 'barometer', 'thermometer-hot'];
    
    iconItems.forEach((item) => {
        const iconName = item.getAttribute('data-icon');
        
        if (multiColorSample.includes(iconName)) {
            const svg = item.querySelector('.icon-svg');
            const groups = svg ? svg.querySelectorAll('g') : [];
            const paths = svg ? svg.querySelectorAll('path') : [];
            
            console.log(`🎨 Multi-color icon ${iconName}:`, {
                hasContent: svg && svg.innerHTML.trim().length > 0,
                groupCount: groups.length,
                pathCount: paths.length,
                isMultiColor: MULTI_COLOR_ICONS.includes(iconName),
                metadataInfo: ICON_METADATA?.icons.find(i => i.name === iconName)
            });
        }
    });
    
    // Test color update
    console.log('🔄 Testing color update...');
    updateIconColors();
}

async function downloadIcon(iconName, format = 'svg') {
    try {
        if (format === 'svg') {
            await downloadSVGIcon(iconName);
        } else if (format === 'png') {
            await downloadPNGIcon(iconName);
        }
    } catch (error) {
        console.error(`Error downloading ${format.toUpperCase()} icon:`, error);
        alert(`Failed to download ${format.toUpperCase()} icon. Please try again.`);
    }
}

async function downloadSVGIcon(iconName) {
    // Fetch the sprite SVG
    const config = window.WeatherIconic?.config;
    const spritesUrl = config?.endpoints?.sprites || './dist/sprites.svg';
    const response = await fetch(spritesUrl);
    const svgText = await response.text();
    
    // Parse the SVG to find the specific icon
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
    const iconElement = svgDoc.getElementById(`weather-${iconName}`);
    
    if (!iconElement) {
        console.error(`Icon ${iconName} not found in sprite`);
        return;
    }
    
    // Create a standalone SVG
    let svgContent = createStandaloneSVG(iconElement, iconName);
    
    // Apply current colors
    if (MULTI_COLOR_ICONS.includes(iconName)) {
        svgContent = applyColorsToSVG(svgContent, currentPrimaryColor, currentSecondaryColor);
    } else {
        svgContent = applyColorsToSVG(svgContent, currentPrimaryColor, currentPrimaryColor);
    }
    
    // Download the file
    downloadFile(svgContent, `weather-${iconName}.svg`, 'image/svg+xml');
}

async function downloadPNGIcon(iconName) {
    // Try to find PNG file in dist/png directory
    const config = window.WeatherIconic?.config;
    const pngBasePath = config?.downloads?.pngBasePath || './dist/png/';
    const sizes = config?.downloads?.pngSizes || [64, 48, 32, 24, 16];
    
    for (const size of sizes) {
        try {
            // Try multi-color version first if it's a multi-color icon
            const isMultiColor = MULTI_COLOR_ICONS.includes(iconName);
            let pngUrl;
            
            if (isMultiColor) {
                pngUrl = `${pngBasePath}${size}/${iconName}-teal-gray.png`;
            } else {
                pngUrl = `${pngBasePath}${size}/${iconName}.png`;
            }
            
            const response = await fetch(pngUrl);
            if (response.ok) {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                
                const a = document.createElement('a');
                a.href = url;
                a.download = `weather-${iconName}-${size}px.png`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                URL.revokeObjectURL(url);
                return; // Success, exit the function
            }
        } catch (error) {
            console.warn(`Failed to download PNG at size ${size}px:`, error);
        }
    }
    
    // If no PNG found, offer to generate from SVG
    alert('PNG version not available. Would you like to download the SVG instead?');
    await downloadSVGIcon(iconName);
}

function createStandaloneSVG(iconElement, iconName) {
    // Get the viewBox from the original sprite or use default
    const viewBox = iconElement.getAttribute('viewBox') || '0 0 24 24';
    
    // Clone the icon content
    const content = iconElement.innerHTML;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="currentColor">
    <title>Weather ${iconName.replace(/-/g, ' ')}</title>
    ${content}
</svg>`;
}

function applyColorsToSVG(svgContent, primaryColor, secondaryColor) {
    // Simple approach: replace fill attributes or add them
    let modifiedSVG = svgContent;
    
    // If it's a multi-color icon, apply different colors to different paths
    if (modifiedSVG.includes('<path') && primaryColor !== secondaryColor) {
        // Find all path elements and apply colors
        const pathRegex = /<path([^>]*?)>/g;
        let pathIndex = 0;
        
        modifiedSVG = modifiedSVG.replace(pathRegex, (match, attributes) => {
            const color = pathIndex === 0 ? primaryColor : secondaryColor;
            pathIndex++;
            
            // Add or replace fill attribute
            if (attributes.includes('fill=')) {
                return match.replace(/fill="[^"]*"/, `fill="${color}"`);
            } else {
                return `<path fill="${color}"${attributes}>`;
            }
        });
    } else {
        // Single color - replace currentColor or add fill to all paths
        modifiedSVG = modifiedSVG.replace(/fill="currentColor"/g, `fill="${primaryColor}"`);
        modifiedSVG = modifiedSVG.replace(/<path(?![^>]*fill=)/g, `<path fill="${primaryColor}"`);
    }
    
    return modifiedSVG;
}

function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some interactive animations
function addInteractiveEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        const speed = scrolled * 0.5;
        
        if (parallax) {
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards and weather cards
    document.querySelectorAll('.feature-card, .weather-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Copy to clipboard functionality
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showCopyFeedback();
        }).catch(err => {
            console.error('Failed to copy: ', err);
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyFeedback();
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    
    document.body.removeChild(textArea);
}

function showCopyFeedback() {
    // Create temporary feedback element
    const feedback = document.createElement('div');
    feedback.textContent = 'Copied!';
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-size: 0.875rem;
        z-index: 1000;
        animation: fadeInOut 2s ease-in-out;
    `;
    
    // Add animation keyframes
    if (!document.getElementById('copy-feedback-style')) {
        const style = document.createElement('style');
        style.id = 'copy-feedback-style';
        style.textContent = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translateY(-10px); }
                20% { opacity: 1; transform: translateY(0); }
                80% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.parentNode.removeChild(feedback);
        }
    }, 2000);
}

// Initialize slideshow
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Change slide every 3 seconds
    setInterval(nextSlide, 3000);
}

// Initialize table of contents smooth scrolling
function initTableOfContents() {
    const tocLinks = document.querySelectorAll('.toc-list a');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for sticky TOC
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize interactive effects after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(addInteractiveEffects, 100);
    initSlideshow();
    initTableOfContents();
    
    // Apply initial colors immediately
    setTimeout(() => {
        updateIconColors();
    }, 200);
});