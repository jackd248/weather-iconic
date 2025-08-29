import { CSSProperties, SVGProps } from 'react';

export interface BaseIconProps {
    /** Icon size in pixels or CSS units */
    size?: number | string;
    /** Icon color - supports CSS color values */
    color?: string;
    /** Additional CSS class name */
    className?: string;
    /** Inline styles */
    style?: CSSProperties;
    /** Accessible title for screen readers */
    title?: string;
    /** Enable multi-color mode for icons with multiple paths */
    multiColor?: boolean;
    /** Primary color for multi-color icons (first path) */
    primaryColor?: string;
    /** Secondary color for multi-color icons (second path) */
    secondaryColor?: string;
}
export interface MultiColorConfig {
    /** Enable multi-color support */
    enabled: boolean;
    /** Primary color (first path/group) */
    primary: string;
    /** Secondary color (second path/group) */
    secondary: string;
    /** Custom CSS class for color scheme */
    scheme?: string;
}
export type ColorScheme = 'temperature-hot' | 'temperature-cold' | 'temperature-medium' | 'sun-cloud' | 'moon-cloud' | 'cloud-rain' | 'cloud-snow' | 'lightning' | 'custom';
export interface ColorSchemeConfig {
    primary: string;
    secondary: string;
    darkModePrimary?: string;
    darkModeSecondary?: string;
}
export interface IconProps extends BaseIconProps, Omit<SVGProps<SVGSVGElement>, 'ref' | 'size' | 'color' | 'style'> {
}
export interface VueIconProps extends BaseIconProps {
    [key: string]: any;
}
export interface IconMetadata {
    name: string;
    pascalName: string;
    kebabName: string;
    size: number;
    originalSize: number;
    compression: string;
}
export type IconName = 'barometer' | 'celsius' | 'cloud-down' | 'cloud-fog' | 'cloud-rain-single' | 'cloud-rain' | 'cloud-snow-single' | 'cloud-snow' | 'cloud-up' | 'cloud-wind' | 'cloud' | 'clouds' | 'compass-east' | 'compass-north-east' | 'compass-north-west' | 'compass-north' | 'compass-south-east' | 'compass-south-west' | 'compass-south' | 'compass-west' | 'compass' | 'fahrenheit' | 'fog' | 'hail' | 'lightning' | 'moon-cloud-lightning' | 'moon-cloud-rain' | 'moon-cloud-snow' | 'moon-cloud-wind' | 'moon-cloud' | 'moon-first-quarter' | 'moon-fog' | 'moon-fullmoon' | 'moon-last-quarter' | 'moon-newmoon' | 'moon-waning-crescent' | 'moon-waning-gibbous' | 'moon-waxing-crescent' | 'moon-waxing-gibbous' | 'moon' | 'rainbow' | 'raindrop' | 'refresh' | 'snowflake' | 'sun-cloud-lightning' | 'sun-cloud-rain' | 'sun-cloud-snow' | 'sun-cloud-wind' | 'sun-cloud' | 'sun-fog' | 'sun-low' | 'sun-medium' | 'sun' | 'sunrise' | 'sunset' | 'thermometer-cold' | 'thermometer-hot' | 'thermometer-medium' | 'tornado' | 'umbrella' | 'wind-high' | 'wind' | 'windsock';
//# sourceMappingURL=types.d.ts.map