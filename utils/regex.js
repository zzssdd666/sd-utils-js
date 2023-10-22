/**
 * 是否为身份证号
 * @param {String} card 号码
 * @returns 真假
 */
export const isCardno = card => {
	card = card + ""
	if (card) {
		// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
		if (reg.test(card) === false) {
			// "身份证输入不合法"
			return false
		} else {
			return true
		}
	} else {
		return false
	}
}

/**
 * 是否为手机号
 * @param {String} phone 手机号
 * @returns 真假
 */
export const isPhone = phone => {
	phone = phone + ""
	var partten = /^1([358][0-9]|4[579]|66|7[01235678]|9[189])[0-9]{8}$/
	if (partten.test(phone)) {
		return true
	} else {
		return false
	}
}

/**
 * 邮箱的校验
 * @param {String} str 邮箱字符串
 * @returns 真假
 */
export const isEmail = str => {
	str = str + ""
	let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
	return reg.test(str)
}

/**
 * URL的校验
 * @param {String} str url字符串
 * @returns 真假
 */
export const isUrl = str => {
	str = str + ""
	let reg = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
	return reg.test(str)
}

/**
 * 是否为整数
 * @param {*} str 要判断的值
 * @returns 真假
 */
export const isInteger = str => {
	str = str + ""
	let reg = /^[-+]?\d*$/
	return reg.test(str)
}
/**
 * 是否为小数
 * @param {*} str 要判断的值
 * @returns 真假
 */
export const isDecimal = str => {
	str = str + ""
	let reg = /^[-\+]?\d+(\.\d+)?$/
	return reg.test(str)
}

/**
 * 用户名校验 4到16位（字母，数字，下划线，减号）
 * @param {*} str 要判断的值
 * @returns 真假
 */
export const isUsername = str => {
	str = str + ""
	let reg = /^[a-zA-Z0-9_-]{4,16}$/
	return reg.test(str)
}

/**
 * 密码强度的校验  最少 min 位，最多 max 位, 包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
 * @param {*} str 要判断的值
 * @param {*} min 最小位数(默认6)
 * @param {*} max 最大位数(默认30)
 * @returns 真假
 */
export const isPassword = (str, min = 6, max = 30) => {
	str = str + ""
	const max1 = parseInt(max) > parseInt(min) ? parseInt(max) : parseInt(min)
	const min1 = parseInt(max) > parseInt(min) ? parseInt(min) : parseInt(max)
	let regstr = `/^.*(?=.{${min1},${max1}})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/`
	let reg = new RegExp(regstr)
	return reg.test(str)
}

/**
 * 是否包含中文
 * @param {*} str 要判断的值
 * @returns 真假
 */
export const isHasCN = str => {
	str = str + ""
	let reg = /[\u4E00-\u9FA5]/
	return reg.test(str)
}

/**
 * 车牌号校验
 * @param {*} str 要判断的值
 * @returns 真假
 */
export const isCarNo = str => {
	str = str + ""
	let reg =
		/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
	return reg.test(str)
}
