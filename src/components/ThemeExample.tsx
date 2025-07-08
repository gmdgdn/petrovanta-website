import React from 'react';
import { useTheme, themeClasses } from '../hooks/useTheme';

/**
 * Example component demonstrating the new theme system
 * This shows how to use the theme colors and utilities
 */
export const ThemeExample: React.FC = () => {
  const { colors, baseColors } = useTheme();

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold mb-8">Theme System Demo</h1>
      
      {/* Color Palette Display */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Color Palette</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Primary Colors */}
          <div>
            <h3 className="text-lg font-medium mb-3">Primary Colors</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-700 rounded" style={{ backgroundColor: baseColors.primary }}></div>
                <span>Primary: {baseColors.primary}</span>
              </div>
              <div className="flex space-x-1">
                {Object.entries(colors.primary).map(([shade, color]) => (
                  shade !== 'DEFAULT' && (
                    <div
                      key={shade}
                      className="w-12 h-12 rounded flex items-end justify-center text-xs font-medium"
                      style={{ backgroundColor: color, color: ['50', '100', '200', '300'].includes(shade) ? '#000' : '#fff' }}
                      title={`${shade}: ${color}`}
                    >
                      {shade}
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Colors */}
          <div>
            <h3 className="text-lg font-medium mb-3">Secondary Colors</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary-500 rounded" style={{ backgroundColor: baseColors.secondary }}></div>
                <span>Secondary: {baseColors.secondary}</span>
              </div>
              <div className="flex space-x-1">
                {Object.entries(colors.secondary).map(([shade, color]) => (
                  shade !== 'DEFAULT' && (
                    <div
                      key={shade}
                      className="w-12 h-12 rounded flex items-end justify-center text-xs font-medium"
                      style={{ backgroundColor: color, color: ['50', '100', '200', '300', '400', '500'].includes(shade) ? '#000' : '#fff' }}
                      title={`${shade}: ${color}`}
                    >
                      {shade}
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Button Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Button Examples</h2>
        <div className="flex flex-wrap gap-4">
          <button className={themeClasses.button.primary}>
            Primary Button
          </button>
          <button className={themeClasses.button.secondary}>
            Secondary Button
          </button>
          <button className={themeClasses.button.outlinePrimary}>
            Outline Primary
          </button>
          <button className={themeClasses.button.outlineSecondary}>
            Outline Secondary
          </button>
        </div>
      </section>

      {/* Background Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Background Examples</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg ${themeClasses.background.primary} text-white`}>
            Primary Background
          </div>
          <div className={`p-4 rounded-lg ${themeClasses.background.secondary} text-black`}>
            Secondary Background
          </div>
          <div className={`p-4 rounded-lg ${themeClasses.background.primaryLight} text-black`}>
            Primary Light Background
          </div>
        </div>
      </section>

      {/* Text Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Text Examples</h2>
        <div className="space-y-2">
          <p className={themeClasses.text.primary}>Primary text color</p>
          <p className={themeClasses.text.secondary}>Secondary text color</p>
          <p className={themeClasses.text.success}>Success text color</p>
          <p className={themeClasses.text.warning}>Warning text color</p>
          <p className={themeClasses.text.error}>Error text color</p>
        </div>
      </section>

      {/* Utility Classes Usage */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Utility Classes Examples</h2>
        <div className="space-y-4">
          <div className="bg-primary-100 border border-primary text-primary-900 p-4 rounded-lg">
            Using Tailwind utilities: bg-primary-100 border-primary text-primary-900
          </div>
          <div className="bg-secondary-100 border border-secondary text-secondary-900 p-4 rounded-lg">
            Using Tailwind utilities: bg-secondary-100 border-secondary text-secondary-900
          </div>
        </div>
      </section>

      {/* WCAG Compliance Note */}
      <section className="bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">WCAG AA Compliance</h2>
        <p className="text-gray-700">
          All color combinations in this theme have been designed to meet WCAG AA contrast ratio requirements (4.5:1) 
          for normal text and important UI elements. This ensures accessibility for users with visual impairments.
        </p>
      </section>
    </div>
  );
};

export default ThemeExample;
