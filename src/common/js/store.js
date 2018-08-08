/**
 * 储存数据到localStorage中
 * @param id 用户店面ID
 * @param id 键
 * @param value 值
 */


export function saveToLocal(id,key,value) {
	let seller = window.localStorage.__seller__
	if(!seller) {
		seller = {}
		seller[id] = {}
	}else {
		seller = JSON.parse(seller)
		if(!seller[id]) {
			seller[id] = {}
		}
	}
	seller[id][key] = value
	window.localStorage.__seller__ = JSON.stringify(seller)
};

/**
 * 从localStorage中取值
 * @param id 用户店面ID
 * @param id 键
 * @param value 值
 */
export function loadFromLocal(id,key,def) {
	let seller = window.localStorage.__seller__
	if(!seller) {
		return def
	}
	seller = JSON.parse(seller)[id]
	if(!seller) {
		return def
	}
	let ret = seller[key]
	return ret || def
};
