//入口文件 index.js

var copy = require("copy-to")

copy(require("./utils/num.js"))
	.and(require("./utils/string.js"))
	.and(require("./utils/object.js"))
	.and(require("./utils/color.js"))
	.to(module.exports)
