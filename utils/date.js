var dayjs = require("dayjs")

/**
 * 格式化年月日  yyyy-mm-dd
 * @param {*} date 要格式化的日期(默认当前时间)
 * @param {*} format 日期格式(默认YYYY-MM-DD)
 * @returns yyyy-mm-dd
 */
export const yyyymmdd = (date = undefined, format = "YYYY-MM-DD") => {
	if (date) {
		return dayjs(date).format(format) // 初始化日期
	}
	return dayjs().format(format) // 初始化日期
}

/**
 * 格式化年月日  YYYY-MM-DD HH:mm:ss
 * @param {*} date 要格式化的日期(默认当前时间)
 * @param {*} format 日期格式(默认YYYY-MM-DD HH:mm:ss)
 * @returns yyyy-mm-dd
 */
export const yyyymmddhhmmss = (date = undefined, format = "YYYY-MM-DD HH:mm:ss") => {
	if (date) {
		return dayjs(date).format(format) // 初始化日期
	}
	return dayjs().format(format) // 初始化日期
}

/**
 * 获取时间戳(秒)
 * @param {*} date 时间
 * @returns 时间戳
 */
export const timeStamp = function (date) {
	if (date) {
		return dayjs(date).unix()
	} else {
		return dayjs().unix()
	}
}

/**
 * 获取时间戳(毫秒)
 * @param {*} date 时间
 * @returns 时间戳
 */
export const timeStampms = function (date) {
	if (date) {
		return dayjs(date).valueOf()
	} else {
		return dayjs().valueOf()
	}
}

/**
 * 时间戳转为格式化后的时间字符串
 * @param {*} timeStamp 时间戳
 * @param {String} format 日期格式(默认 YYYY-MM-DD HH:mm:ss)
 * @returns 时间字符串
 */
export const parseTimeStamp = function (timeStamp, format = "YYYY-MM-DD HH:mm:ss") {
	return dayjs.unix(timeStamp).format(format)
}

/**
 * 格式化现在距${endTime}的剩余时间
 * @param {Date} endTime 大于等于当前时间的日期
 * @return xx天xx小时xx分钟xx秒
 */
export const remainTime = function (endTime) {
	var startDate = new Date() //开始时间
	var endDate = endTime ? new Date(endTime) : startDate //结束时间
	var t = endDate.getTime() - startDate.getTime() //时间差
	var d = 0,
		h = 0,
		m = 0,
		s = 0
	if (t >= 0) {
		d = Math.floor(t / 1000 / 3600 / 24)
		h = Math.floor((t / 1000 / 60 / 60) % 24)
		m = Math.floor((t / 1000 / 60) % 60)
		s = Math.floor((t / 1000) % 60)
	}
	return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒"
}

/**
 * 格式化${startTime}距现在的已过时间
 * @param  {Date} startTime 时间
 * @return {String} xx年前 / xx个月前 / xx天前 / xx小时前 / xx分钟前 / 刚刚
 */
export const passTime = function (startTime) {
	var currentTime = Date.parse(new Date()),
		time = currentTime - new Date(startTime),
		day = parseInt(time / (1000 * 60 * 60 * 24)),
		hour = parseInt(time / (1000 * 60 * 60)),
		min = parseInt(time / (1000 * 60)),
		month = parseInt(day / 30),
		year = parseInt(month / 12)
	if (year) return year + "年前"
	if (month) return month + "个月前"
	if (day) return day + "天前"
	if (hour) return hour + "小时前"
	if (min) return min + "分钟前"
	else return "刚刚"
}

/**
 * 时间个性化输出功能
 * @ 1、< 60s, 显示为“刚刚”
 * @ 2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
 * @ 3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
 * @ 4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
 * @ 5、>= 1year, 显示具体日期“XXXX年XX月XX日 XX:XX”
 * @param time 时间
 * @returns 结果
 */
export const passTime2 = function (time) {
	var date = new Date(time),
		curDate = new Date(),
		year = date.getFullYear(),
		month = date.getMonth() + 10,
		day = date.getDate(),
		hour = date.getHours(),
		minute = date.getMinutes(),
		curYear = curDate.getFullYear(),
		curHour = curDate.getHours(),
		timeStr

	if (year < curYear) {
		timeStr = year + "年" + month + "月" + day + "日 " + hour + ":" + minute
	} else {
		var pastTime = curDate - date,
			pastH = pastTime / 3600000

		if (pastH > curHour) {
			timeStr = month + "月" + day + "日 " + hour + ":" + minute
		} else if (pastH >= 1) {
			timeStr = "今天 " + hour + ":" + minute + "分"
		} else {
			var pastM = curDate.getMinutes() - minute
			if (pastM > 1) {
				timeStr = pastM + "分钟前"
			} else {
				timeStr = "刚刚"
			}
		}
	}
	return timeStr
}

/**
 * 是否为今天
 * @param {*} value 日期
 * @returns 结果
 */
export const isToday = function (value) {
	if (value) {
		value = new Date(value)
		let now = new Date()
		let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
		let start = new Date(value.getFullYear(), value.getMonth(), value.getDate())
		return today.getTime() === start.getTime()
	}
	return false
}
