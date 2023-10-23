import CryptoJS from "crypto-js"

/**
 * BASE64加密
 * @param {String} str 要加密的字符串
 * @returns 加密结果
 */
export const base64Encode = function (str) {
	if (str) {
		return btoa(unescape(encodeURIComponent(str)))
	}
	return ""
}

/**
 * BASE64解密
 * @param {String} str 要解密的字符串
 * @returns 解密结果
 */
export const base64Decode = function (str) {
	if (str) {
		return decodeURIComponent(escape(atob(str)))
	}
	return ""
}

export const md5 = function (str) {
	if (str) {
		return CryptoJS.MD5(str)
	}
	return ""
}
