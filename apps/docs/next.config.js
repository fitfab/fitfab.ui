/**
 * This transpile the @fitfab/core library
 * Ref: https://github.com/vercel/turborepo/discussions/243#discussioncomment-2229245
 */
const withTM = require("next-transpile-modules")(["@fitfab/core"]);

module.exports = withTM({
  reactStrictMode: true,
});
