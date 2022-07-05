'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./kurishutofu-ts-lib-template.cjs.prod.js");
} else {
  module.exports = require("./kurishutofu-ts-lib-template.cjs.dev.js");
}
