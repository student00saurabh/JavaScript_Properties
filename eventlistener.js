// it is similaras onclick but
// in onclick function we can give only one instruction only one function can call
// and in eventlistner we can call multiple functions
// Example for Onclick
// let btns = document.querySelectorAll("button");
// for (btn of btns) {
// 	btn.onclick = sayhello;
// 	btn.onclick = saySuccessFull
// }
function sayhello() {
	alert("hello!");
}
function saySuccessFull() {
	alert("SuccessFull");
}

let btns = document.querySelectorAll("button");

for (btn of btns) {
	btn.addEventListener("click", sayhello);
	btn.addEventListener("click", saySuccessFull); 
	// both will trigure simultaniouslly 
}

for (btn of btns) {
	btn.addEventListener("click", function () {
		console.log(this);
	}); 
}


// for eachelement like heading and pragraphs
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

for (btn of btns) {
	btn.addEventListener("click", function () {
		console.log(this.innerText);
		this.style.backgroundColor = "blue";
	});
}

// p.addEventListener("click", function () {
// 		console.log(this.innerText);
// 		this.style.backgroundColor = "blue";
// });
// 	h1.addEventListener("click", function () {
// 		console.log(this.innerText);
// 		this.style.backgroundColor = "blue";
// 	});
// 	h3.addEventListener("click", function () {
// 		console.log(this.innerText);
// 		this.style.backgroundColor = "blue";
// 	});

// this is not right way

function chagecolor() {
	console.log(this.innerText);
	this.style.backgroundColor = "blue";
}

p.addEventListener("click", chagecolor);
h1.addEventListener("click", chagecolor);
h3.addEventListener("click", chagecolor);