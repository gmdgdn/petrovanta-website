/** @type {import('tailwindcss').Config} */
// Petrovanta Design System Tokens - Exact specification implementation
const themeColors = {
  primary: {
    500: '#343BED', // Royal blue
    600: '#071D49', // Deep navy
  },
  accent: {
    500: '#FF8453', // Energy orange
  },
  neutral: {
    100: '#F5F6F8', // Light background
    600: '#444952', // Body text
  },
};

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px", // Updated to match grid system
      },
    },
    screens: {
      'sm': '320px',   // phones
      'md': '480px',   // large phones
      'lg': '768px',   // tablets
      'xl': '1024px',  // small desktops
      '2xl': '1440px', // wide
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: themeColors.primary[500],
          500: themeColors.primary[500],
          600: themeColors.primary[600],
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: themeColors.accent[500],
          500: themeColors.accent[500],
          foreground: "hsl(var(--accent-foreground))",
        },
        neutral: {
          100: themeColors.neutral[100],
          600: themeColors.neutral[600],
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'Noto Sans Arabic', 'sans-serif'],
      },
      fontSize: {
        // Mobile typography (base = 16px)
        'h1-mobile': ['40px', { lineHeight: '1.2' }],
        'h2-mobile': ['30px', { lineHeight: '1.2' }],
        'h3-mobile': ['22.5px', { lineHeight: '1.2' }],
        'h4-mobile': ['17px', { lineHeight: '1.2' }],
        'body-lg-mobile': ['16px', { lineHeight: '1.5' }],
        'body-mobile': ['15px', { lineHeight: '1.5' }],
        'caption-mobile': ['12px', { lineHeight: '1.4' }],
        // Desktop typography (base = 18px)
        'h1-desktop': ['48px', { lineHeight: '1.2' }],
        'h2-desktop': ['36px', { lineHeight: '1.2' }],
        'h3-desktop': ['27px', { lineHeight: '1.2' }],
        'h4-desktop': ['20px', { lineHeight: '1.2' }],
        'body-lg-desktop': ['18px', { lineHeight: '1.5' }],
        'body-desktop': ['16px', { lineHeight: '1.5' }],
        'caption-desktop': ['13.5px', { lineHeight: '1.4' }],
      },
      spacing: {
        1: '0.25rem',  // 4px
        2: '0.5rem',   // 8px
        3: '1rem',     // 16px
        4: '1.5rem',   // 24px
        5: '2rem',     // 32px
        6: '2.5rem',   // 40px
        7: '3rem',     // 48px
      },
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
      },
      boxShadow: {
        1: '0 1px 2px rgba(0,0,0,0.12)',
        2: '0 4px 8px rgba(0,0,0,0.14)',
        3: '0 8px 16px rgba(0,0,0,0.16)',
        'dark-1': '0 1px 2px rgba(0,0,0,0.32)',
        'dark-2': '0 4px 8px rgba(0,0,0,0.36)',
        'dark-3': '0 8px 16px rgba(0,0,0,0.38)',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4,0,0.2,1)',
      },
      transitionDuration: {
        150: '150ms',
        300: '300ms',
        500: '500ms',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
