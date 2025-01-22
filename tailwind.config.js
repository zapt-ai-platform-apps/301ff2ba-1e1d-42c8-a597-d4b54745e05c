export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#007AFF',
        secondary: '#34C759',
        background: '#F5F5F7',
        iosDark: '#1C1C1E',
        iosLight: '#FFFFFF',
        iosGray: '#8E8E93'
      },
      boxShadow: {
        'ios-small': '0 1px 3px rgba(0,0,0,0.12)',
        'ios-medium': '0 4px 12px rgba(0,0,0,0.15)',
        'ios-large': '0 8px 24px rgba(0,0,0,0.2)',
        'ios-button': '0 4px 8px rgba(0,122,255,0.3)'
      },
      borderRadius: {
        'ios': '14px',
        'ios-small': '8px'
      }
    },
  },
  plugins: [],
};