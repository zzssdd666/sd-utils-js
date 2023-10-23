//入口文件 index.js

var copy = require("copy-to")

copy(require("./utils/num.js"))
	.and(require("./utils/string.js"))
	.and(require("./utils/object.js"))
	.and(require("./utils/color.js"))
	.and(require("./utils/regex.js"))
	.and(require("./utils/date.js"))
	.and(require("./utils/function.js"))
	.and(require("./utils/crypto.js"))
	.to(module.exports)
