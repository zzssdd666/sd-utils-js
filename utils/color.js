/**
 * rgb颜色转rgba颜色
 * @param {String} rgbStr rgb颜色字符串
 * @param {String | Number} alpha 透明度 0-1
 * @returns rgba颜色
 */
export const rgbToRgba = (rgbStr, alpha) => {
	let rgbaAttr = rgbStr.match(/[\d.]+/g)
	if (rgbaAttr.length >= 3) {
		let r, g, b
		r = rgbaAttr[0]
		g = rgbaAttr[1]
		b = rgbaAttr[2]
		return "rgba(" + r + "," + g + "," + b + "," + alpha + ")"
	}
}

/**
 * rgba转rgb
 * @param {String} rgbaStr rgba颜色
 * @returns rgb颜色
 */
export const rgbaToRgb = rgbaStr => {
	let rgbaAttr = rgbaStr.match(/[\d.]+/g)
	if (rgbaAttr.length >= 3) {
		var r, g, b
		r = rgbaAttr[0]
		g = rgbaAttr[1]
		b = rgbaAttr[2]
		return "rgb(" + r + "," + g + "," + b + ")"
	}
	return ""
}

/**
 * 获取rgba颜色的透明度
 * @param {String} color rgba颜色
 * @returns 透明度
 */
export const getRgbaAlp = color => {
	let alp = 1
	let rgbaReg = /rgba\([\d ]+(?:\,([\d. ]+)){3}\)/
	if (rgbaReg.test(color)) {
		alp = color.replace(rgbaReg, "$1")
	}
	return alp
}
