const toolsCardTemplate = /*html*/ `
	<div class="innerCard">
		De to viktigste verktøyene vi skal bruke er disse:
		<ul>
			<li>
				Koderedigeringsprogrammet
				<a href="https://code.visualstudio.com/">Visual Studio Code</a>
				<br />Vi skal bruke noen <i>extensions</i>:
				<ul>
					<li>JavaScript-booster</li>
					<li>es6-string-html</li>
					<li>live-server</li>
					<li>live-share</li>
				</ul>
			</li>
			<li>
				Nettleseren
				<a href="https://www.google.com/intl/no/chrome/">Google Chrome</a>
			</li>
		</ul>
	</div>`;

const htmlCardTemplate = /*html*/ `
	<div class="innerCard">
		Vi bruker HTML til å definere et dokument.
		<ul>
			<li>Tagger for grunnleggende oppsett av en HTML-fil</li>
			<li>Tagger for grunnleggende formatering av tekst</li>
			<li class="monoSpace">&lt;div&gt;</li>
			<li class="monoSpace">&lt;input type="text"&gt;</li>
			<li class="monoSpace">&lt;button&gt;</li>
			<li>
				<a
					href="https://www.w3schools.com/html/default.asp"
					target="_new">
					W3Schools HTML Tutorial
				</a>
			</li>
			<li>
				<a
					href="https://www.w3schools.com/tags/default.asp"
					target="_new">
					W3Schools HTML Reference
				</a>
			</li>
		</ul>
	</div>`;

const cssCardTemplate = /*html*/ `
	<div class="innerCard">
		Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende
		og lignende.
		<ul>
			<li class="monoSpace">background-color</li>
			<li class="monoSpace">color</li>
			<li class="monoSpace">padding</li>
			<li class="monoSpace">margin</li>
			<li class="monoSpace">border</li>
			<li class="monoSpace">text-align</li>
			<li class="monoSpace">font-size</li>
			<li>
				<a
					href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
					target="_new">
					Flexbox
				</a>
			</li>
			<li>
				<a
					href="https://css-tricks.com/snippets/css/complete-guide-grid/"
					target="_new">
					Grid
				</a>
			</li>
			<li>
				<a
					href="https://www.w3schools.com/css/default.asp"
					target="_new">
					W3Schools CSS Tutorial
				</a>
			</li>
			<li>
				<a
					href="https://www.w3schools.com/cssref/default.asp"
					target="_new">
					W3Schools CSS Reference
				</a>
			</li>
		</ul>
	</div>`;

const jsCardTemplate = /*html*/ `
	<div class="innerCard">
		Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære
		grunnleggende programmering ved å manipulere HTML- og CSS-kode på en
		nettside ved hjelp av JavaScript.
		<ul>
			<li>
				Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi
				heller å følge kurset vårt på Moodle.
			</li>
			<li>
				<a
					href="https://www.w3schools.com/jsref/default.asp"
					target="_new">
					W3Schools JavaScript Reference
				</a>
			</li>
		</ul>
	</div>`;

const bodyGameTemplate = /* html */ `
	<div class="innerCard">
		<div class="bodyPart">
			<button onclick="changeHead(-1)">
				<img src="public/arrow_left.svg" />
			</button>
			<div id="head">😶</div>
			<button onclick="changeHead(1)">
				<img src="public/arrow_right.svg" />
			</button>
		</div>
		<div class="bodyPart">
			<button onclick="changeTorso(-1)">
				<img src="public/arrow_left.svg" />
			</button>
			<div id="torso">👚</div>
			<button onclick="changeTorso(1)">
				<img src="public/arrow_right.svg" />
			</button>
		</div>
		<div class="bodyPart">
			<button onclick="changeLegs(-1)">
				<img src="public/arrow_left.svg" />
			</button>
			<div id="legs">👖</div>
			<button onclick="changeLegs(1)">
				<img src="public/arrow_right.svg" />
			</button>
		</div>
	</div>`;

//Buttons
function noLayout() {
	document.getElementById("cards").classList = "";
}

function verticalLayout() {
	noLayout();
	document.getElementById("cards").classList = "vertical";
}

function horizontalLayout() {
	noLayout();
	document.getElementById("cards").classList = "horizontal";
}

function gridLayout() {
	noLayout();
	document.getElementById("cards").classList = "grid";
}

//Cards
function clearAll() {
	document.getElementById("toolsContent").innerHTML = "";
	document.getElementById("htmlContent").innerHTML = "";
	document.getElementById("cssContent").innerHTML = "";
	document.getElementById("jsContent").innerHTML = "";
	document.getElementById("bodyGameContent").innerHTML = "";
}

function showTools() {
	clearAll();
	document.getElementById("toolsContent").innerHTML = toolsCardTemplate;
}

function showHtml() {
	clearAll();
	document.getElementById("htmlContent").innerHTML = htmlCardTemplate;
}

function showCss() {
	clearAll();
	document.getElementById("cssContent").innerHTML = cssCardTemplate;
}

function showJS() {
	clearAll();
	document.getElementById("jsContent").innerHTML = jsCardTemplate;
}

function showBodyGame() {
	clearAll();
	document.getElementById("bodyGameContent").innerHTML = bodyGameTemplate;
}

let head = "";
let headIndex = 0;
function changeHead(change) {
	headIndex += change; // headIndex = headIndex + change

	if (headIndex > 2) {
		headIndex = 0;
	}

	if (headIndex < 0) {
		headIndex = 2;
	}

	if (headIndex === 0) {
		hode = "😁";
	}
	if (headIndex === 1) {
		hode = "😒";
	}
	if (headIndex === 2) {
		hode = "😘";
	}

	document.getElementById("head").innerHTML = hode;
}

let torso = "";
let torsoIndex = 0;
function changeTorso(change) {
	torsoIndex += change;

	if (torsoIndex < 0) {
		// Hvis index er mindre enn null setter vi den til 2
		torsoIndex = 2;
	}
	if (torsoIndex > 2) {
		// Hvis index er større enn 2 setter vi den til 0
		torsoIndex = 0;
	}

	if (torsoIndex === 0) {
		torso = "👚";
	}
	if (torsoIndex === 1) {
		torso = "👕";
	}
	if (torsoIndex === 2) {
		torso = "🧥";
	}

	document.getElementById("torso").innerHTML = torso;
}

const allLegs = ["👖", "🩳", "🩰"];
let legIndex = 0;
function changeLegs(change) {
	legIndex += change;

	if (legIndex < 0) {
		legIndex = 2;
	}
	if (legIndex > 2) {
		legIndex = 0;
	}

	document.getElementById("legs").innerHTML = allLegs[legIndex];
}
