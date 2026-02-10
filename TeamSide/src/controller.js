updateView();

// Add a string of info to a selected team member
function addInfo() {
	// Get the input element
	const infoInputEl = document.getElementById("info-input");

	// Extract its value
	const infoInput = infoInputEl.value + ". ";

	// Get the right variable based on which team member is selected
	if (currentSelected === "remy") remyInfo += infoInput;
	else if (currentSelected === "isak") isakInfo += infoInput;
	else if (currentSelected === "thomas") thomasInfo += infoInput;
	else if (currentSelected === "andreas") andreasInfo += infoInput;
	else alert("Nobody selected!!");

	updateInfo(currentSelected);

	// Clear the input field
	infoInputEl.value = "";

	// Select the input field, so you can easily add more things
	infoInputEl.focus();

	updateView();
}

function updateInfo(person) {
	console.log(person);
	currentSelected = person;
	if (person === "remy") currentInfo = remyInfo;
	else if (person === "isak") currentInfo = isakInfo;
	else if (person === "thomas") currentInfo = thomasInfo;
	else if (person === "andreas") currentInfo = andreasInfo;
	else {
		alert("Invalid name selected!!");
	}

	updateView();
}
