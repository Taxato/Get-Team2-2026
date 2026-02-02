// Add a string of info to a selected team member
function addInfo() {
	// Get the selected <option> from our <select> element
	const selectedName = document.getElementById("name-select").value;

	// Get the input element
	const infoInputEl = document.getElementById("info-input");

	// Extract its value
	const infoInput = infoInputEl.value;

	// Get the correct li element corresponding to the selectedName and append the infoInput to its innerHTML
	document.getElementById(`li-${selectedName}`).innerHTML += infoInput + ". ";

	// Clear the input field
	infoInputEl.value = "";

	// Select the input field, so you can easily add more things
	infoInputEl.focus();
}

const originalBackgroundColor =
	document.querySelector("body").style.backgroundColor;

let currentBackgroundState = "original";

function setBackgroundColor(color) {
	document.body.style.backgroundColor = color;
}

function handleClick() {
	if (currentBackgroundState === "original") {
		setBackgroundColor(
			`hsl(${Math.random() * 360}, 75%, ${Math.random() * 30 + 60}%)`,
		);
		currentBackgroundState = "random";
	} else {
		setBackgroundColor(originalBackgroundColor);
		currentBackgroundState = "original";
	}
}
