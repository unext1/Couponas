const WithPWA = require("next-pwa");

module.exports = WithPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
