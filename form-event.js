let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
	// console.log("form submitted");
	event.preventDefault();
	// alert("Form submitted");

	// let inp = document.querySelector("input");
	// console.log(inp);
	// console.dir(inp);
	// console.log(inp.value);
	let user = document.querySelector("#user");
	let pass = document.querySelector("#pass");

	console.log(user.value);
	console.log(pass.value);
	alert(`hi ${user.value}, your password is ${pass.value}`);
});