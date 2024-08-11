// let btn = document.querySelector("button");
// console.log(btn);

// btn.onclick = function () {
// 	console.log("Button is clicked");
// 	// alert("Successfully cliccked");
// }


// btn.onclick = sayh;

let btns = document.querySelectorAll("button");
for (btn of btns) {
	btn.onclick = sayh; //yhan par function sayh ke sath pairanthesis () nhi lgana hai qki uska matlab hota hai ki vhin par colll ho jayega
	btn.onmouseenter = function () {
		console.log("You enterd mouse in button");
	}
}
function sayh() {
	alert("Successfully clicked");
}