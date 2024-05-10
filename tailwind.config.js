/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        slideTop: 'slide-in-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideTopSlow: 'slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        tetxExpand: 'tracking-in-expand 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        bounceInLeft: 'bounceInLeft 1s cubic-bezier(0.215, 0.61, 0.355, 1) both'
      },
      keyframes: {
        bounceInLeft: {
          '0%': { transform: 'translate3d(-3000px, 0, 0)', opacity: '0' },
          '60%': { transform: 'translate3d(25px, 0, 0)', opacity: '1' },
          '75%': { transform: 'translate3d(-10px, 0, 0)' },
          '90%': { transform: 'translate3d(5px, 0, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' }
        },
        'tracking-in-expand': {
          '0%': { letterSpacing: '-0.5em', opacity: '0' },
          '40%': { opacity: '0.6' },
          '100%': { letterSpacing: '0', opacity: '1' }
        },
        'slide-in-top': {
          '0%': { transform: 'translateY(-5px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      }
    }
  },
  plugins: []
}
