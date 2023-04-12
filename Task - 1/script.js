function insertSymbol(symbol) {
	document.getElementById('result').value += symbol;
}

function clearResult() {
	document.getElementById('result').value = "";
}

function backspace() {
	var currentResult = document.getElementById('result').value;
	document.getElementById('result').value = currentResult.slice(0, -1);
}

function calculate() {
	try {
		var result = eval(document.getElementById('result').value);
		document.getElementById('result').value = result;
	} catch(err) {
		document.getElementById('result').value = "Error";
	}
}
