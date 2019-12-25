function objectToArray(obj) {
	let arr = Object.keys(obj);
	let arr2 = Object.values(obj);
	let real = [];
	for(let i = 0; i < arr.length; i++) {
		let some = [];
		some.push(arr[i])
		some.push(arr2[i])
		real.push(some);
	}
	return real
}