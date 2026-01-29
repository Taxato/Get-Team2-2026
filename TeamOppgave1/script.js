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
					target="_new"
					>W3Schools HTML Tutorial</a
				>
			</li>
			<li>
				<a
					href="https://www.w3schools.com/tags/default.asp"
					target="_new"
					>W3Schools HTML Reference</a
				>
			</li>
		</ul>
	</div>
`;

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
	<div
		id="head"
		class="bodyPart"></div>
	<div
		id="body"
		class="bodyPart"></div>
	<div
		id="legs"
		class="bodyPart"></div>
`;

//Buttons
function noLayout() {}
function verticalLayout() {}
function horizontalLayout() {}
function gridLayout() {}
function showBodyGame() {}

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
}
