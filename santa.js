var firstDisplayTop = "Hello again Mia! Merry Christmas.";
var firstDisplayBottom = "Your first clue is: gzudzgnkkx.";
var secondDisplayTop = "Good job on translating!";
var secondDisplayBottom = "Your next clue is: Todays wordle answer.";
var thirdDisplayTop = "Nice job! Hopefully you didn't look it up...";
var thirdDisplayBottom = "Your next clue is: To ask Aidan...";
var fourthDisplayTop = "WOW! Good job with that one... You're getting closer...";
var fourthDisplayBottom = "Your next clue is: To ask Aidan (again...)";
var fifthDisplayTop = "Nice listening skills!";
var fifthDisplayBottom = "Your final clue is: To ask Aidan (AGAIN!!!)";
var finalDisplayTop = "YOU DID IT!!! Great work detective Mia...";
var finalDisplayBottom = "Now, whisper to Aidan the final top-secret code word: woobydoowoybeyloo";
var countTicker = true;

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const pageOpen = async () => {
	for (let i = 0; i <= firstDisplayTop.length; i++) {
		await sleep(50);
		document.getElementById("topDisplay").innerHTML = (firstDisplayTop.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("topDisplay").innerHTML = (firstDisplayTop + "|");
			countTicker = false;
		} else {
			document.getElementById("topDisplay").innerHTML = (firstDisplayTop + "&nbsp")
			countTicker = true;
		}
	}
	for (let i = 0; i <= firstDisplayBottom.length; i++) {
		await sleep(50);
		document.getElementById("bottomDisplay").innerHTML = (firstDisplayBottom.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("bottomDisplay").innerHTML = (firstDisplayBottom + "|");
			countTicker = false;
		} else {
			document.getElementById("bottomDisplay").innerHTML = (firstDisplayBottom + "&nbsp")
			countTicker = true;
		}
	}
}

const firstCode = async () => {
	for (let i = 0; i <= secondDisplayTop.length; i++) {
		await sleep(50);
		document.getElementById("topDisplay").innerHTML = (secondDisplayTop.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("topDisplay").innerHTML = (secondDisplayTop + "|");
			countTicker = false;
		} else {
			document.getElementById("topDisplay").innerHTML = (secondDisplayTop + "&nbsp")
			countTicker = true;
		}
	}
	for (let i = 0; i <= secondDisplayBottom.length; i++) {
		await sleep(50);
		document.getElementById("bottomDisplay").innerHTML = (secondDisplayBottom.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("bottomDisplay").innerHTML = (secondDisplayBottom + "|");
			countTicker = false;
		} else {
			document.getElementById("bottomDisplay").innerHTML = (secondDisplayBottom + "&nbsp")
			countTicker = true;
		}
	}
}

const secondCode = async () => {
	for (let i = 0; i <= thirdDisplayTop.length; i++) {
		await sleep(50);
		document.getElementById("topDisplay").innerHTML = (thirdDisplayTop.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("topDisplay").innerHTML = (thirdDisplayTop + "|");
			countTicker = false;
		} else {
			document.getElementById("topDisplay").innerHTML = (thirdDisplayTop + "&nbsp")
			countTicker = true;
		}
	}
	for (let i = 0; i <= thirdDisplayBottom.length; i++) {
		await sleep(50);
		document.getElementById("bottomDisplay").innerHTML = (thirdDisplayBottom.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("bottomDisplay").innerHTML = (thirdDisplayBottom + "|");
			countTicker = false;
		} else {
			document.getElementById("bottomDisplay").innerHTML = (thirdDisplayBottom + "&nbsp")
			countTicker = true;
		}
	}
}

const thirdCode = async () => {
	for (let i = 0; i <= fourthDisplayTop.length; i++) {
		await sleep(50);
		document.getElementById("topDisplay").innerHTML = (fourthDisplayTop.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("topDisplay").innerHTML = (fourthDisplayTop + "|");
			countTicker = false;
		} else {
			document.getElementById("topDisplay").innerHTML = (fourthDisplayTop + "&nbsp")
			countTicker = true;
		}
	}
	for (let i = 0; i <= fourthDisplayBottom.length; i++) {
		await sleep(50);
		document.getElementById("bottomDisplay").innerHTML = (fourthDisplayBottom.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("bottomDisplay").innerHTML = (fourthDisplayBottom + "|");
			countTicker = false;
		} else {
			document.getElementById("bottomDisplay").innerHTML = (fourthDisplayBottom + "&nbsp")
			countTicker = true;
		}
	}
}

const fourthCode = async () => {
	for (let i = 0; i <= fifthDisplayTop.length; i++) {
		await sleep(50);
		document.getElementById("topDisplay").innerHTML = (fifthDisplayTop.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("topDisplay").innerHTML = (fifthDisplayTop + "|");
			countTicker = false;
		} else {
			document.getElementById("topDisplay").innerHTML = (fifthDisplayTop + "&nbsp")
			countTicker = true;
		}
	}
	for (let i = 0; i <= fifthDisplayBottom.length; i++) {
		await sleep(50);
		document.getElementById("bottomDisplay").innerHTML = (fifthDisplayBottom.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("bottomDisplay").innerHTML = (fifthDisplayBottom + "|");
			countTicker = false;
		} else {
			document.getElementById("bottomDisplay").innerHTML = (fifthDisplayBottom + "&nbsp")
			countTicker = true;
		}
	}
}

const fifthCode = async () => {
	for (let i = 0; i <= finalDisplayTop.length; i++) {
		await sleep(50);
		document.getElementById("topDisplay").innerHTML = (finalDisplayTop.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("topDisplay").innerHTML = (finalDisplayTop + "|");
			countTicker = false;
		} else {
			document.getElementById("topDisplay").innerHTML = (finalDisplayTop + "&nbsp")
			countTicker = true;
		}
	}
	for (let i = 0; i <= finalDisplayBottom.length; i++) {
		await sleep(50);
		document.getElementById("bottomDisplay").innerHTML = (finalDisplayBottom.substr(0, i) + "|");
	}
	for (let i = 0; i <= 5; i++) {
		await sleep(400);
		if (countTicker) {
			document.getElementById("bottomDisplay").innerHTML = (finalDisplayBottom + "|");
			countTicker = false;
		} else {
			document.getElementById("bottomDisplay").innerHTML = (finalDisplayBottom + "&nbsp")
			countTicker = true;
		}
	}
}

pageOpen();

function submitFirstPassword() {
	if (document.getElementById("passwordEnter").value == "haveaholly"){
		document.getElementById("passwordButton").setAttribute("onclick","submitSecondPassword()");
		firstCode();
		document.getElementById("passwordEnter").value = "";
		document.getElementById("passwordEnter").placeholder = "Hint: No Hint..";
		document.getElementById("verify").style.color = "#7FFF00";
		document.getElementById("verify").innerHTML = "Correct!";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	} else {
		document.getElementById("passwordEnter").value = "";
		document.getElementById("verify").style.color = "red";
		document.getElementById("verify").innerHTML = "Incorrect. Shift the letters, then type in all lower case, no spaces...";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 5000)
	}
}

function submitSecondPassword() {
	if (document.getElementById("passwordEnter").value == "shares"){
		document.getElementById("passwordButton").setAttribute("onclick","submitThirdPassword()");
		secondCode();
		document.getElementById("passwordEnter").value = "";
		document.getElementById("passwordEnter").placeholder = "Hint: The Back";
		document.getElementById("verify").style.color = "#7FFF00";
		document.getElementById("verify").innerHTML = "Correct!";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	} else {
		document.getElementById("passwordEnter").value = "";
		document.getElementById("verify").style.color = "red";
		document.getElementById("verify").innerHTML = "Incorrect.";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	}
}

function submitThirdPassword() {
	if (document.getElementById("passwordEnter").value == "jollychristmas"){
		document.getElementById("passwordButton").setAttribute("onclick","submitFourthPassword()");
		thirdCode();
		document.getElementById("passwordEnter").value = "";
		document.getElementById("passwordEnter").placeholder = "Hint: Morse";
		document.getElementById("verify").style.color = "#7FFF00";
		document.getElementById("verify").innerHTML = "Correct!";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	} else {
		document.getElementById("passwordEnter").value = "";
		document.getElementById("verify").style.color = "red";
		document.getElementById("verify").innerHTML = "Incorrect. Look at the back... (no spaces, all lowercase)";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	}
}

function submitFourthPassword() {
	if (document.getElementById("passwordEnter").value == "7462"){
		document.getElementById("passwordButton").setAttribute("onclick","submitFifthPassword()");
		fourthCode();
		document.getElementById("passwordEnter").value = "";
		document.getElementById("passwordEnter").placeholder = "Hint: Enchanting";
		document.getElementById("verify").style.color = "#7FFF00";
		document.getElementById("verify").innerHTML = "Correct!";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	} else {
		document.getElementById("passwordEnter").value = "";
		document.getElementById("verify").style.color = "red";
		document.getElementById("verify").innerHTML = "Incorrect. Maybe try writing it down...";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	}
}

function submitFifthPassword() {
	if (document.getElementById("passwordEnter").value == "almostgift"){
		fifthCode();
		document.getElementById("passwordEnter").style.display = "none";
		document.getElementById("passwordText").style.display = "none";
		document.getElementById("passwordButton").style.display = "none";
		document.getElementById("verify").style.color = "#7FFF00";
		document.getElementById("verify").innerHTML = "Correct!";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	} else {
		document.getElementById("passwordEnter").value = "";
		document.getElementById("verify").style.color = "red";
		document.getElementById("verify").innerHTML = "Incorrect. No spaces, all lowercase... Minecraft enchanting table...";
		document.getElementById("verify").style.display = "block";
		setTimeout(function(){
			document.getElementById("verify").style.display = "none";
		}, 3000)
	}
}
