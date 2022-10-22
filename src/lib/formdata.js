/**
 * create by Zap Lin
 * this is a magic function for collecting form data  and convert it to object
 * 
 * ref: https://developer.mozilla.org/zh-TW/docs/Web/API/FormData/FormData
 */


/**
 * collecting data from <form> element and convert to Object (JSON)
 * if form have multiple fields with the same name, it will be merged into an array (only for select and checkbox)
 * @param {Element} form_element - a DOM element, like <form> 
 * @returns {object} a object data
 */
export default function (form_element) {

	const obj_data = {}
	const getValue = value => (value == '' ? undefined : value)

	// normal collect  e.g. <input type='text' name='field-name' value='123' /> ...
	var es,e, pair
	for (es = new FormData(form_element).entries(); !(e = es.next()).done && (pair = e.value);) {
		let key = pair[0], value = pair[1]
		obj_data[key] = getValue(value)
	}

	// new FormData(form_element).forEach(function (value, key) {
	// 	obj_data[key] = getValue(value)
	// })

	// patch BaseJsonInput data e.g. <input name='field-name' data-json='true' value='{"text":"this is json data"} />'
	const json_element = form_element.querySelectorAll('[data-json]')
	for (let i = 0; i < json_element.length; i++) {
		const elename = json_element[i].name
		if (isNullOrWhiteSpace(elename)) continue;
		const name = elename.trim()
		const value = tryToConverToJson(json_element[i].value)
		obj_data[name] = value
	}

	// patch checkbox to array e.g. <input type='checkbox' name='field-name' value='123'/> ...
	const multiple_element = form_element.querySelectorAll('input[type=checkbox]')
	const cache_number = {}
	for (let i = 0; i < multiple_element.length; i++) {
		const elename = multiple_element[i].name
		if (isNullOrWhiteSpace(elename)) continue;
		const name = elename.trim()
		if (typeof cache_number[name] === 'number') cache_number[name] = cache_number[name] + 1;
		else cache_number[name] = 1
	}

	for (let i = 0; i < multiple_element.length; i++) {
		if (!multiple_element[i].checked) continue;

		const elename = multiple_element[i].name
		if (isNullOrWhiteSpace(elename)) continue;
		const name = elename.trim()
		const value = multiple_element[i].value

		if (Array.isArray(obj_data[name])) obj_data[name].push(value)
		else {
			if (cache_number[name] > 1) obj_data[name] = [value]
		}
	}

	// patch select to array e.g. <select name='field-name'><option value='123'/>...</select>
	const select_element = form_element.querySelectorAll('select')
	for (let i = 0; i < select_element.length; i++) {
		if (!select_element[i].multiple) continue;
		const elename = select_element[i].name
		if (isNullOrWhiteSpace(elename)) continue;
		const name = elename.trim()
		const options = select_element[i].options
		for (let j = 0; j < options.length; j++) {
			if (!options[j].selected) continue;
			const value = options[j].value
			if (Array.isArray(obj_data[name])) obj_data[name].push(value)
			else obj_data[name] = [value]
		}
	}

	return obj_data
}

function tryToConverToJson(jsonString) {
	try {
		return JSON.parse(jsonString)
	}
	catch (e) {
		return ''
	}
}

function isNullOrWhiteSpace(value) {
	if (typeof value !== 'string') return true
	value = value.trim()
	for (let i = 0; i < value.length; i++)
		if (!!value[i]) return false
	return true
}

