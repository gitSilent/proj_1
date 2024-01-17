/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '300px',
      sm: '480px',
      sl: '600px',
      mx: '660px',
      md: '768px',
      lg: '976px',
      lx: '1040px',
      xl: '1440px',
      xll: '1441px'
    },

    extend: {
      scale: {
        '85': '1.85',
      },
      screens: {
        s:'320px',
        ss:'370px',
        sxs:'390px',
        ssx:'425px',
        sx:'410px',
        m:'700px',
        mm:'800px',
        xm:'850px',
        l:'1200px',
        lxl:'1270px',
        shd:'1350px',
        mhd:'1550px',
        hd:'1700px',
        fhd:'1920px',
        w:'2000px',
        ww:'2200px',
        www:'2400px',
        uw:'3000px',
        uuw:'3800px',
        sw:'5000px'
      },
      boxShadow: {
        'header': '0px 2px 15px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}