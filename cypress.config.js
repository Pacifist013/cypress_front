const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    blockHosts: ["*mc.yandex.ru"],
    baseUrl:"https://pokemonbattle.ru" 
  },
});


// URL для front_base_tests  baseUrl:"https://login.qa.studio"
// URL для pokemon_buy_avatar  baseUrl:"https://pokemonbattle.ru"
// Все параметры конфига: https://docs.cypress.io/guides/references/configuration
