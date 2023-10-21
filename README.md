# js 常用工具

1. 生成指定范围、指定小数位数的随机数
2. 字符串是否为空
3. 字符串是否不为空
4. 通用类型判断
5. 生成uuid
6. 判断对象是否包含某个属性
7. 生成随机字符串
8. rgb颜色转rgba颜色
9. rgba转rgb
10. 获取rgba颜色的透明度


# 使用

## 安装
```bash
npm i sd-utils-js --save
```

## 用法
```js
import * as utils from 'sd-utils-js';
```

## 示例
```js
const person = {
    name: 'john',
    age: 20,
}
utils.has(person, 'name'); //true
```