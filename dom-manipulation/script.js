const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";
const body = document.querySelector("body");
body.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "Hey I'm blue!";
h3.style.color = "blue";
body.appendChild(h3);

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "solid black 1px";
body.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";
div.appendChild(h1);

const metoo = document.createElement("p");
metoo.textContent = "ME TOO!";
div.appendChild(metoo);

// Events

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		alert(btn.id);
	});
});
