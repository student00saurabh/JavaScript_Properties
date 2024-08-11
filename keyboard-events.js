let btn = document.querySelector("button");
let inp = document.querySelector("input");

// inp.addEventListener("click", function (event) {
// 	console.log(event);
// });

inp.addEventListener("keydown", function (event) {
	console.log("key = ", event.key);
	console.log("code = ", event.code);
	console.log("Key was pressed");
});
// inp.addEventListener("keyup", function () {
// 	console.log("Key was released");
// });
