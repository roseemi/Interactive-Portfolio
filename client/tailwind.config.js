/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.js",
    "./src/pages/Portfolio.js",
    "./src/pages/NotFound.js",
    "./src/pages/Navigation.js",
    "./src/pages/Demos.js",
    "./src/pages/Game.js",
    "./src/pages/game_components/IntroGame.js",
    "./src/pages/game_components/GameInterface.js",
    "./src/pages/game_components/GameInterfaceChildComponents.js",
    "./src/pages/game_components/GameComplete.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}