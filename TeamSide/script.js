let remyInfo =
	"Hei! Jeg heter Remy, bor på Rennesøy, og er 36 år. Hobbyer: Trommer, Fiske og Friluft, Motorsykler, Gaming. ";
let isakInfo = "Jeg heter Isak og jeg liker å sykle.. Jeg er 26 år. ";
let thomasInfo = "Jeg heter Thomas, bor i Oslo, og jeg liker Gaming. ";
let andreasInfo =
	"Jeg heter Andreas, og jeg liker pasta og turer i skogen. Og turer i skogen med pasta. ";

let currentInfo = "";

let currentSelected = "";

// Add a string of info to a selected team member
function addInfo() {
	// Get the input element
	const infoInputEl = document.getElementById("info-input");

	// Extract its value
	const infoInput = infoInputEl.value + ". ";

	// Get the right variable based on which team member is selected
	if (currentSelected === "remy") {
		remyInfo += infoInput;
		currentInfo = remyInfo;
	} else if (currentSelected === "isak") {
		isakInfo += infoInput;
		currentInfo = isakInfo;
	} else if (currentSelected === "thomas") {
		thomasInfo += infoInput;
		currentInfo = thomasInfo;
	} else if (currentSelected === "andreas") {
		andreasInfo += infoInput;
		currentInfo = andreasInfo;
	} else {
		alert("Nobody selected!!");
	}

	// Clear the input field
	infoInputEl.value = "";

	// Select the input field, so you can easily add more things
	infoInputEl.focus();

	updateView();
}

function updateView() {
	const appHtml = /* html */ `

	<select name="" onchange="changeBColor(this.value)">
		<option>Velg en Farge</option>
		<option value="redBody">Rød</option>
    	<option value="blueBody">Blå</option>
    	<option value="greenBody">Grønn</option>
	</select>

		${showHeader()}
		${showNavBar()}
		<section class="info-section">
			<div class="info-btns">
				<div
					data-selected=${currentSelected === "remy"}
					data-name="remy"
					class="btn info-btn"
					onclick="updateInfo(this)">
					Remy
				</div>
				<div
					data-selected=${currentSelected === "isak"}
					data-name="isak"
					class="btn info-btn"
					onclick="updateInfo(this)">
					Isak
				</div>
				<div
					data-selected=${currentSelected === "thomas"}
					data-name="thomas"
					class="btn info-btn"
					onclick="updateInfo(this)">
					Thomas
				</div>
				<div
					data-selected=${currentSelected === "andreas"}
					data-name="andreas"
					class="btn info-btn"
					onclick="updateInfo(this)">
					Andreas
				</div>
			</div>
			
			 ${showInfo()}
		</section>
		${showFooter()}`;

	document.getElementById("app").innerHTML = appHtml;
}

function showInfo() {
	if (currentSelected)
		// Check truthy falsy value of currentSelected
		return /* html */ `
			<div
				id="info"
				class="info">
				${currentInfo}	
			</div>

			<form class="info-form"
				onsubmit="
					event.preventDefault(); // Stops page refresh on submitfase
					addInfo();">
				<input
					id="info-input"
					placeholder="Si noe gøy om deg selv"
					required />
				<button class="btn" type="submit">Legg til info</button>
			</form>
	`;
	// Don't need "else" statement, because if currentSelected the function will return early
	return "";
}

function updateInfo(btnEl) {
	const person = btnEl.dataset.name;
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

function showHeader() {
	return /*html*/ `
		<header>
			<h1>Team 2 aka RITA</h1>
		</header>
	`;
}

function showFooter() {
	return /*html*/ `
		<footer>scrollbar</footer>
	`;
}

function showNavBar() {
	return /*html*/ `
		<nav>
			<button
				class="btn"
				onclick="">
				Home
			</button>
			<button
				class="btn"
				onclick="">
				Input
			</button>
		</nav>
	`;
}

function changeBColor(backgroundColor) {
	document.getElementById("myBody").classList = backgroundColor;
	console.log(document.body);
}

updateView();
