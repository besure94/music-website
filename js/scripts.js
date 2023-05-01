window.onload = function() {
	function getRandom(max) {
		return Math.floor(Math.random() * max);
	};

	let body = document.querySelector("body");
	body.onmouseover = function() {
		let colorA = getRandom(255);
		let colorB = getRandom(255);
		let colorC = getRandom(255);
		let rgbString = `rgb(${colorA}, ${colorB}, ${colorC})`
		body.style.backgroundColor = rgbString;
		console.log(rgbString);
	};
};