var dayjs = require("dayjs")

/**
 * 格式化年月日  yyyy-mm-dd
 * @param {*} date 要格式化的日期(默认当前时间)
 * @param {*} format 日期格式(默认YYYY-MM-DD)
 * @returns yyyy-mm-dd
 */
export const yyyymmdd = (date = undefined, format = "YYYY-MM-DD") => {
	if (date) {
		return dayjs(date).format(format) // 初始化日期
	}
	return dayjs().format(format) // 初始化日期
}

/**
 * 格式化年月日  YYYY-MM-DD HH:mm:ss
 * @param {*} date 要格式化的日期(默认当前时间)
 * @param {*} format 日期格式(默认YYYY-MM-DD HH:mm:ss)
 * @returns yyyy-mm-dd
 */
export const yyyymmddhhmmss = (date = undefined, format = "YYYY-MM-DD HH:mm:ss") => {
	if (date) {
		return dayjs(date).format(format) // 初始化日期
	}
	return dayjs().format(format) // 初始化日期
}
