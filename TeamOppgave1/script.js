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
	document.getElementById("jSContent").innerHTML = "";
	document.getElementById("bodyGameContent").innerHTML = "";
}

function showTools() {
	clearAll();
	document.getElementById("toolsContent").innerHTML = /* html */ `
	<div class="innerCard">
		De to viktigste verktøyene vi skal bruke er disse:
		<ul>
			<li>
				Koderedigeringsprogrammet <a href="https://code.visualstudio.com/">Visual Studio Code</a>
				<br />
				Vi skal bruke noen <i>extensions</i>:
				<ul>
					<li>JavaScript-booster</li>
					<li>es6-string-html</li>
					<li>live-server</li>
					<li>live-share</li>
				</ul>
			</li>
			<li>
				Nettleseren <a href="https://www.google.com/intl/no/chrome/">
					Google Chrome
				</a>
			</li>
		</ul>
	</div>;
	`;
}

function showHtml() {
	clearAll();
}
function showCss() {
	clearAll();
}
function showJS() {
	clearAll();
}
function showBodyGame() {
	clearAll();
}
