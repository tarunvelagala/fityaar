// src/theme/colors.ts (Dayzer UI Scheme)

// 1. Define the Primitive Palette (Generic Names for Flexibility)
const palette = {
    // Base & Contrast
    white: '#FFFFFF',
    textDark: '#1A1A1A',        // Primary text/high-contrast elements (Near-Black)
    paleGray: '#fafbfc',        // Main screen background (very light gray)

    // Brand & Icon Colors
    brandGreen: '#2DBA4E',      // Primary Brand Color (Your requested Green)

    // Pastel/Accent Colors
    accentA: '#F4D89A',         // Soft Gold/Peach (Abstract shapes)
    accentB: '#F9D05F',         // Mustard Yellow (Tracked Hours box)
    accentC: '#F7E9F4',         // Pale Lilac/Pink (Header background, Screen 2)

    // Dark Mode Neutrals (Approximation)
    darkBackground: '#1A1C1E',
    darkCard: '#2C2C2E',
    offWhite: '#F0F0F0',
    softGray: '#666666',
};

// 2. Define Semantic Types
export type ThemeColors = {
    background: string;
    card: string;
    textPrimary: string;
    textSecondary: string;
    icon: string;
    primary: string;        // Used for the main brand color
    border: string;
    accentDecorative: string; // New key for secondary accents like header backgrounds
    success: string;
    warning: string;
    error: string;
    disabled: string;
    overlay: string;
};


// 3. Light Mode (Mimics the Image)
export const lightColors: ThemeColors = {
    background: palette.paleGray, // Very light gray background
    card: palette.white,          // White cards
    textPrimary: palette.textDark,
    textSecondary: palette.softGray,

    // ICON/PRIMARY: Your main brand color (Green)
    primary: palette.brandGreen,
    icon: palette.textDark, // Icons on light background are black/dark

    // Utility & Accent Colors
    border: palette.softGray,
    accentDecorative: palette.accentC, // Pale Lilac header background

    success: '#6BBF59',        // Soft green (slightly darker than brand for distinction)
    warning: '#F5A623',        // Warm amber/orange (distinct from accentA/B)
    error: '#E85D75',          // Soft coral red (fits pastel aesthetic)
    disabled: '#D1D1D6',       // Light gray (matches iOS disabled states)
    overlay: 'rgba(26, 26, 26, 0.4)',  // Soft dark overlay
};

// 4. Dark Mode (Approximation for Readability)
export const darkColors: ThemeColors = {
    background: palette.darkBackground,
    card: palette.darkCard,
    textPrimary: palette.offWhite,
    textSecondary: palette.softGray,

    // ICON/PRIMARY: Use the brand color for visibility on dark mode
    primary: palette.brandGreen,
    icon: palette.brandGreen, // Icons glow with brand color

    // Utility & Accent Colors
    border: '#444444',
    accentDecorative: palette.darkCard,

    success: '#7FD66E',        // Brighter soft green for dark mode visibility
    warning: '#FFB84D',        // Brighter warm amber for dark mode
    error: '#FF7B8F',          // Brighter coral for dark mode visibility
    disabled: '#4A4A4A',       // Medium gray for disabled on dark
    overlay: 'rgba(0, 0, 0, 0.7)',  // Darker overlay for dark mode
};