let number = 0;

function addNumbers() {
	number = number + 1;
	console.log(number);
	let sum = document.getElementById("number");
	sum.innerHTML = number;
}

const addition = document.getElementById("add");
addition.addEventListener("click", addNumbers);

function subtractNumbers() {
	number = number - 1;
	console.log(number);
	let sum = document.getElementById("number");
	sum.innerHTML = number;
}

const subtraction = document.getElementById("subtract");
subtraction.addEventListener("click", subtractNumbers);

function resetNumbers() {
	number = 0;
	let sum = document.getElementById("number");
	sum.innerHTML = number;
}

const reset = document.getElementById("reset");
reset.addEventListener("click", resetNumbers);
