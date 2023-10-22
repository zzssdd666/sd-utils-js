var _ = require("lodash")

/**
 * 是否为空
 * @param {String} str
 * @returns
 */
export const isEmpty = function (str) {
	if (str == null || str == undefined) {
		return true
	}
	str = str.toString().replace(/\s+/g, "")
	if (str.length == 0 || str == "") {
		return true
	}

	return false
}

/**
 * 是否不为空
 * @param {String} str
 * @returns
 */
export const isNotEmpty = function (str) {
	return !isEmpty(str)
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
 * 转换任务内容为字符串
 * @param {*} data 要转换的内容
 * @returns 字符串
 */
export const toString = function (data) {
	return _.toString(data)
}
