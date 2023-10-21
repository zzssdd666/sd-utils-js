/**
 * 生成指定范围、指定小数位数的随机数
 * @param {Number} minNum 最小值
 * @param {Number} maxNum  最大值
 * @param {Number} decimalNum 小数点后几位
 * @returns 结果
 */
exports.randomNum = function (minNum, maxNum, decimalNum) {
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
