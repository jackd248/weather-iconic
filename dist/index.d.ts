export * from './types';
export { iconNames, iconData } from './icons/names.js';
export declare const weatherIconicCSS = "\n/* Weather Iconic Base Styles */\n.weather-icon {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 1;\n}\n\n.weather-icon--interactive {\n  cursor: pointer;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.weather-icon--interactive:hover {\n  opacity: 0.8;\n}\n\n.weather-icon--spinning {\n  animation: weather-icon-spin 2s linear infinite;\n}\n\n.weather-icon--pulse {\n  animation: weather-icon-pulse 2s ease-in-out infinite;\n}\n\n@keyframes weather-icon-spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n@keyframes weather-icon-pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.5; }\n}\n";
export declare const getIconName: (name: string) => string;
export declare const formatIconName: (name: string) => string;
//# sourceMappingURL=index.d.ts.map