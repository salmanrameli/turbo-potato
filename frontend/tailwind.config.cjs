const { fontFamily } = require("tailwindcss/defaultTheme");
const Unfonts = require("unplugin-fonts");

module.exports = {
  content: [
    "./index,html",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', ...fontFamily.sans],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    Unfonts.default.vite({
      custom: {
        families: [
          {
            name: "Roboto",
            local: "Roboto",
            src: "./src/assets/fonts/Roboto-VariableFont_wdth.ttf",
          },
        ],
      },
    }),
  ],
}