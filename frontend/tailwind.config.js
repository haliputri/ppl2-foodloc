/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    colors: {
      gray: {
        'D9D9D9': '#D9D9D9',
      },
      orange: {
        'FFA90A' : '#FFA90A',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}

