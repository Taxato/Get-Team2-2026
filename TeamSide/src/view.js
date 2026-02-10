function updateView() {
	const appHtml = /* html */ `
		${showColorSelect()}
		${showHeader()}
		${showNavBar()}
		${showInfoSection()}
		${showFooter()}
	`;

	document.getElementById("app").innerHTML = appHtml;
}

function showColorSelect() {
	return /* html */ `
		<select name="head-color-select" onchange="headColor = this.value; updateView()">
			<option hidden value="">--Velg en farge--</option>
			<option ${headColor === "red" ? "selected" : ""} value="red">Rød</option>
			<option ${headColor === "green" ? "selected" : ""} value="green">Grønn</option>
			<option ${headColor === "blue" ? "selected" : ""} value="blue">Blå</option>
		</select>
	`;
}

function showInfoSection() {
	return /* html */ `
		<section class="info-section">
			<div class="info-btns">
				<div
					data-selected=${currentSelected === "remy"}
					data-name="remy"
					class="btn info-btn"
					onclick="updateInfo(this.dataset.name)">
					Remy
				</div>
				<div
					data-selected=${currentSelected === "isak"}
					data-name="isak"
					class="btn info-btn"
					onclick="updateInfo(this.dataset.name)">
					Isak
				</div>
				<div
					data-selected=${currentSelected === "thomas"}
					data-name="thomas"
					class="btn info-btn"
					onclick="updateInfo(this.dataset.name)">
					Thomas
				</div>
				<div
					data-selected=${currentSelected === "andreas"}
					data-name="andreas"
					class="btn info-btn"
					onclick="updateInfo(this.dataset.name)">
					Andreas
				</div>
			</div>
			
			${showInfoText()}
		</section>
	`;
}

function showInfoText() {
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

function showHeader() {
	let headerClass = "";

	if (headColor === "red") headerClass = "redText";
	else if (headColor === "green") headerClass = "greenText";
	else if (headColor === "blue") headerClass = "blueText";

	return /* html */ `
		<header>
			<h1 class="${headerClass}">Team 2 aka RITA</h1>
		</header>
	`;
}

function showNavBar() {
	return /*html*/ `
		<nav>
			<a
				class="btn"
				href="#">
				Home
			</a>
			<a
				class="btn"
				href="#">
				Input
			</a>
		</nav>
	`;
}

function showFooter() {
	return /*html*/ `
		<footer>
			<a
				href="https://github.com/Taxato/Get-Team-RITA-2026/tree/master/TeamSide"
				target="_blank">
				Github Repo
			</a>
		</footer>
	`;
}
