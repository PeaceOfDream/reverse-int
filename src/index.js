module.exports = function reverse (n) {
	let num = n.toString();
	let result = '';
	if (num[0] == '-') {
		num = num.slice(1);
	}
	for (let i = 0;i <= num.length - 1;i++) {
		result = num[i] + result;
	}
	return result;
}
