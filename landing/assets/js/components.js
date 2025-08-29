/* ========================================
   WEATHER ICONIC - COMPONENT MODULES
   ======================================== */

// Icon Slideshow Component
class IconSlideshow {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.slides = this.container?.querySelectorAll('.slide') || [];
        this.currentSlide = 0;
        this.intervalId = null;
        
        if (this.slides.length > 0) {
            this.init();
        }
    }
    
    init() {
        this.start();
    }
    
    nextSlide() {
        if (this.slides.length === 0) return;
        
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
    }
    
    start(interval = 3000) {
        this.intervalId = setInterval(() => this.nextSlide(), interval);
    }
    
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    
    destroy() {
        this.stop();
    }
}

// Table of Contents Component
class TableOfContents {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.links = this.container?.querySelectorAll('.toc-list a') || [];
        
        if (this.links.length > 0) {
            this.init();
        }
    }
    
    init() {
        this.links.forEach(link => {
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
}

// Integration Tabs Component
class IntegrationTabs {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.tabBtns = document.querySelectorAll('.tab-btn');
        this.tabPanels = document.querySelectorAll('.tab-panel');
        
        if (this.tabBtns.length > 0) {
            this.init();
        }
    }
    
    init() {
        this.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                this.switchTab(targetTab);
            });
        });
    }
    
    switchTab(targetTab) {
        // Remove active class from all buttons and panels
        this.tabBtns.forEach(btn => btn.classList.remove('active'));
        this.tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked button and corresponding panel
        const activeBtn = document.querySelector(`[data-tab="${targetTab}"]`);
        const activePanel = document.getElementById(targetTab);
        
        if (activeBtn && activePanel) {
            activeBtn.classList.add('active');
            activePanel.classList.add('active');
        }
    }
}

// Search Component
class IconSearch {
    constructor(inputSelector, gridSelector, iconNames) {
        this.searchInput = document.querySelector(inputSelector);
        this.iconGrid = document.querySelector(gridSelector);
        this.iconNames = iconNames;
        this.filteredIcons = [...iconNames];
        
        if (this.searchInput) {
            this.init();
        }
    }
    
    init() {
        this.searchInput.addEventListener('input', 
            this.debounce((e) => this.handleSearch(e), 300)
        );
    }
    
    handleSearch(event) {
        const query = event.target.value.toLowerCase().trim();
        
        if (query === '') {
            this.filteredIcons = [...this.iconNames];
        } else {
            this.filteredIcons = this.iconNames.filter(iconName => 
                iconName.toLowerCase().includes(query)
            );
        }
        
        // Emit search event for other components to listen
        document.dispatchEvent(new CustomEvent('iconsFiltered', {
            detail: { filteredIcons: this.filteredIcons }
        }));
    }
    
    debounce(func, wait) {
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
}

// Color Picker Component
class ColorPicker {
    constructor(primarySelector, secondarySelector) {
        this.primaryInput = document.querySelector(primarySelector);
        this.secondaryInput = document.querySelector(secondarySelector);
        this.currentPrimaryColor = '#80BBB2';
        this.currentSecondaryColor = '#666666';
        
        if (this.primaryInput && this.secondaryInput) {
            this.init();
        }
    }
    
    init() {
        // Set initial values
        this.primaryInput.value = this.currentPrimaryColor;
        this.secondaryInput.value = this.currentSecondaryColor;
        
        // Add event listeners
        this.primaryInput.addEventListener('change', (e) => {
            this.currentPrimaryColor = e.target.value;
            this.emitColorChange();
        });
        
        this.secondaryInput.addEventListener('change', (e) => {
            this.currentSecondaryColor = e.target.value;
            this.emitColorChange();
        });
    }
    
    emitColorChange() {
        document.dispatchEvent(new CustomEvent('colorsChanged', {
            detail: {
                primary: this.currentPrimaryColor,
                secondary: this.currentSecondaryColor
            }
        }));
    }
    
    reset() {
        this.currentPrimaryColor = '#80BBB2';
        this.currentSecondaryColor = '#666666';
        
        this.primaryInput.value = this.currentPrimaryColor;
        this.secondaryInput.value = this.currentSecondaryColor;
        
        this.emitColorChange();
    }
    
    getColors() {
        return {
            primary: this.currentPrimaryColor,
            secondary: this.currentSecondaryColor
        };
    }
}

// Copy to Clipboard Utility
class ClipboardManager {
    static copy(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text).then(() => {
                ClipboardManager.showFeedback();
            }).catch(err => {
                console.error('Failed to copy: ', err);
                ClipboardManager.fallbackCopy(text);
            });
        } else {
            ClipboardManager.fallbackCopy(text);
        }
    }
    
    static fallbackCopy(text) {
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
            ClipboardManager.showFeedback();
        } catch (err) {
            console.error('Fallback: Unable to copy', err);
        }
        
        document.body.removeChild(textArea);
    }
    
    static showFeedback() {
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
        
        // Add animation keyframes if not already present
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
}

// Export components for use in main.js
window.WeatherIconic = window.WeatherIconic || {};
window.WeatherIconic.components = {
    IconSlideshow,
    TableOfContents,
    IntegrationTabs,
    IconSearch,
    ColorPicker,
    ClipboardManager
};