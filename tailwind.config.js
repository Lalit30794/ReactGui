module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}", // adjust as per your framework
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
  },
};
