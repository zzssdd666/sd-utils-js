/**
 * 判断对象中是否存在某个属性
 * @param {*} obj
 * @param {*} prop
 * @returns
 */
exports.has = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop)
}
