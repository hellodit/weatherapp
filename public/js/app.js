console.log("Client side javascript file is loaded!");

const weatherform = document.querySelector("form");
const searchval = document.querySelector("input");

const msg1 = document.querySelector("#location");
const msg2 = document.querySelector("#forecast");

weatherform.addEventListener("submit", (e) => {
	e.preventDefault();
	const location = searchval.value;
	msg1.textContent = "laoding...";

	fetch("/weather?address=" + location).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				msg1.textContent = data.location;
				msg2.textContent = data.forecast;
			}
		});
	});
});
