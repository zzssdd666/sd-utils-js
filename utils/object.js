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

/**
 * 比较任何类型的对象是否相同
 * @param {*} a 对象1
 * @param {*} b 对象2
 * @returns 是否相同
 */
export const equals = function (a, b) {
	if (a === b) return true
	if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
	if (!a || !b || (typeof a !== "object" && typeof b !== "object")) return a === b
	if (a.prototype !== b.prototype) return false
	let keys = Object.keys(a)
	if (keys.length !== Object.keys(b).length) return false
	return keys.every(k => equals(a[k], b[k]))
}

/**
 * 数组列表转树形结构
 * @param {Array} items 数组列表
 * @param {String} parentId 父id字段名(默认: parentId )
 * @param {String} childName 子列表字段名(默认: children)
 * @returns 树形结构
 */
export const listToTree = function (items, parentId = "parentId", childName = "children") {
	const result = [] // 存放结果集
	const itemMap = {} //
	for (const item of items) {
		const id = item.id
		const pid = item[parentId]

		if (!itemMap[id]) {
			itemMap[id] = {
				[childName]: []
			}
		}
		itemMap[id] = {
			...item,
			[childName]: itemMap[id][childName]
		}

		const treeItem = itemMap[id]

		if (pid == 0 || pid == null) {
			result.push(treeItem)
		} else {
			itemMap[pid][childName].push(treeItem)
		}
	}
	return result
}

//
/**
 * 树形结构转扁平数组列表
 * @param {*} data 树形结构数据
 * @param {*} childName 子列表字段名(默认: children)
 * @returns 数组列表
 */
export const treeToList = function (data, childName = "children") {
	return data.reduce((prev, cur) => prev.concat([cur], treeToList(cur[childName] || [])), [])
}
