/**
 * 防抖
 * @param {Function} fn 需要防抖的函数
 * @param {Number} delay 延迟时间(默认1000毫秒)
 * @returns 防抖函数
 */
export const debance = function (fn, delay = 1000) {
	let t = null
	return function () {
		let args = arguments
		clearTimeout(t)
		t = setTimeout(function () {
			fn.apply(context, args)
		}, delay)
	}
}

/**
 * 节流
 * @param {*} fn 需要节流的函数
 * @param {*} delay 延迟时间(默认1000毫秒)
 * @returns 节流函数
 */
export const throttle = function (fn, delay = 1000) {
	let preTime = Date.now()
	return function () {
		let that = this
		let args = arguments
		let nowTime = Date.now()
		if (preTime + delay < nowTime) {
			fn.apply(that, args)
			preTime = nowTime
		}
	}
}
