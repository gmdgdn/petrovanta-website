import { theme, colors, contrastPairs } from '../theme';

/**
 * Hook for accessing theme values in React components
 */
export const useTheme = () => {
  return {
    colors: theme.colors,
    baseColors: colors,
    contrastPairs,
    fontSize: theme.fontSize,
    spacing: theme.spacing,
    boxShadow: theme.boxShadow,
  };
};

/**
 * Get a color value by name and shade
 */
export const getThemeColor = (colorName: keyof typeof theme.colors, shade?: keyof typeof theme.colors.primary) => {
  const colorFamily = theme.colors[colorName];
  if (!colorFamily) return '#000000';
  
  if (shade && typeof colorFamily === 'object' && shade in colorFamily) {
    return colorFamily[shade as keyof typeof colorFamily];
  }
  
  return typeof colorFamily === 'string' ? colorFamily : colorFamily.DEFAULT;
};

/**
 * Utility to determine if text should be light or dark based on background
 */
export const getContrastTextColor = (backgroundColor: string): string => {
  // Simple implementation - in production you'd use a proper contrast calculation
  const lightColors = [
    theme.colors.primary[50],
    theme.colors.primary[100],
    theme.colors.primary[200],
    theme.colors.secondary[50],
    theme.colors.secondary[100],
    theme.colors.secondary[200],
    theme.colors.secondary[300],
    theme.colors.secondary[400],
  ];
  
  return lightColors.includes(backgroundColor) ? '#000000' : '#ffffff';
};

/**
 * Class name utilities for consistent styling
 */
export const themeClasses = {
  // Button variants
  button: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outlinePrimary: 'btn-outline-primary',
    outlineSecondary: 'btn-outline-secondary',
  },
  // Text variants
  text: {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
  },
  // Background variants
  background: {
    primary: 'bg-primary',
    primaryLight: 'bg-primary-light',
    primaryLighter: 'bg-primary-lighter',
    secondary: 'bg-secondary',
    secondaryLight: 'bg-secondary-light',
    secondaryLighter: 'bg-secondary-lighter',
    success: 'bg-success',
    successLight: 'bg-success-light',
    warning: 'bg-warning',
    warningLight: 'bg-warning-light',
    error: 'bg-error',
    errorLight: 'bg-error-light',
  },
  // Border variants
  border: {
    primary: 'border-primary',
    secondary: 'border-secondary',
  },
} as const;

export default useTheme;
