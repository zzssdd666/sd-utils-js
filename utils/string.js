var _ = require("lodash")

/**
 * 判断是否为空
 * @param obj 任何类型的对象
 * @returns 是否为空
 */
export const isEmpty = function (obj) {
	// 数字判空
	if (parseFloat(obj).toString() != "NaN") {
		return false
	}

	// 按照对应的数据类型进行数据判空
	let objType = Object.prototype.toString.call(obj)
	// 字符串
	if (objType === "[object String]") {
		// 去除所有空格
		obj = obj.replace(/(^\s*)|(\s*$)/g, "")
		if (obj && obj.length > 0) {
			return false
		}
	}

	// 数组判空
	if (objType === "[object Array]") {
		if (obj && obj.length > 0) {
			return false
		}
	}

	// 如果是对象
	if (objType === "[object Object]" && !(JSON.stringify(obj) == "{}")) {
		return false
	}

	if (obj && obj.length > 0) {
		return false
	}
	return true
}

/**
 * 是否不为空
 * @param {*} obj
 * @returns
 */
export const isNotEmpty = function (obj) {
	return !isEmpty(obj)
}

/**
 * 通用类型判断
 * @param {*} data 数据
 * @param {String} typeStr 类型字符串 如: 'Number' / 'String' / 'Boolean' / 'Null'  / 'Undefined' / 'Symbol' / 'Object' / 'Array' / 'Function' / 'Date' ...
 * @returns
 */
export const isType = function (data, typeStr) {
	return typeOf(data).toLowerCase() == typeStr.toLowerCase()
}

/**
 * 获取类型字符串
 * @param {*} data
 * @returns 类型字符串
 */
export const typeOf = function (data) {
	return Object.prototype.toString.call(data).slice(8, -1)
}

/**
 * 生成uuid
 * @returns uuid
 */
export const uuid = function () {
	var s = []
	var hexDigits = "0123456789abcdef"
	for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
	}
	s[14] = "4"
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
	s[8] = s[13] = s[18] = s[23] = ""

	var uuid = s.join("")
	return uuid
}

/**
 * 生成随机字符串
 * @param {Number} length 长度(默认16)
 * @param {string} charSet 指定字符集(默认ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789)
 * @returns 随机字符串
 */
export const randomString = function (length = 16, charSet = null) {
	var result = []
	length = length || 16
	charSet = charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

	while (length--) {
		result.push(charSet[Math.floor(Math.random() * charSet.length)])
	}
	return result.join("")
}

/**
 * 转换任何内容为字符串
 * @param {*} data 要转换的内容
 * @returns 字符串
 */
export const toString = function (data) {
	return _.toString(data)
}

/**
 * 将手机号格式化，中间4位以 * 号代替
 * @param phone 11位手机号
 * @returns xxx****xxxx
 */
export const phoneToStar = function (phone) {
	phone = phone + ""
	if (phone.length == 11) {
		return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
	} else {
		console.log("手机号不是11位")
		return phone
	}
}

/**
 * 获取浏览器名称
 * @returns 浏览器名称
 */
export const browserName = function () {
	if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
		return "MSIE8"
	} else if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
		return "MSIE6"
	} else if (navigator.userAgent.indexOf("MSIE 7.0") > 0) {
		return "MSIE7"
	} else if (navigator.userAgent.indexOf("Firefox") > 0) {
		return "Firefox"
	} else if (navigator.userAgent.indexOf("Chrome") > 0) {
		return "Chrome"
	} else {
		return "Other"
	}
}
