var _ = require("lodash")

/**
 * 判断对象中是否存在某个属性
 * @param {*} obj
 * @param {*} prop
 * @returns
 */
export const has = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop)
}

/**
 * 浅拷贝
 * @param {*} obj 要拷贝的值
 * @returns 拷贝后的值
 */
export const clone = function (obj) {
	if (obj) {
		return _.clone(objects)
	} else {
		return null
	}
}

/**
 * 深拷贝
 * @param {*} obj 要拷贝的值
 * @returns 拷贝后的值
 */
export const cloneDeep = function (obj) {
	if (obj) {
		return _.cloneDeep(obj)
	} else {
		return null
	}
}
