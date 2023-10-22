var _ = require("lodash")

/**
 * 生成指定范围、指定小数位数的随机数
 * @param {Number} minNum 最小值
 * @param {Number} maxNum  最大值
 * @param {Number} decimalNum 小数点后几位
 * @returns 结果
 */
export const randomNum = (minNum, maxNum, decimalNum) => {
	// 获取指定范围内的随机数, decimalNum指小数保留多少位
	var max = 0,
		min = 0
	minNum <= maxNum ? ((min = minNum), (max = maxNum)) : ((min = maxNum), (max = minNum))
	switch (arguments.length) {
		case 1:
			return Math.floor(Math.random() * (max + 1))
		case 2:
			return Math.floor(Math.random() * (max - min + 1) + min)
		case 3:
			return (Math.random() * (max - min) + min).toFixed(decimalNum)
		default:
			return Math.random()
	}
}

/**
 * 转换 value 为一个数字
 * @param {*} value 要处理的值
 * @returns 返回数字
 */
export const toNumber = value => {
	return _.toNumber(value)
}

/**
 * 转换 value 为一个整数
 * @param {*} value 要处理的值
 * @returns 返回整数
 */
export const toInteger = value => {
	return _.toInteger(value)
}

/**
 * 根据指定精度 四舍五入
 * @param {*} value 要四舍五入的数字
 * @param {*} precision 四舍五入的精度
 * @returns 返回四舍五入的数字
 */
export const round = (value, precision = 0) => {
	return _.round(value, precision)
}
