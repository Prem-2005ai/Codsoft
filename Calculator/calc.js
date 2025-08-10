function appendChar(char) {
    const display = document.getElementById("display");
    const expression = document.getElementById("expression");
    display.value += char;
    expression.value = display.value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("expression").value = "";
}

function deleteChar() {
    const display = document.getElementById("display");
    const expression = document.getElementById("expression");
    display.value = display.value.slice(0, -1);
    expression.value = display.value;
}

function calculate() {
    const display = document.getElementById("display");
    const expression = document.getElementById("expression");
    try {
        // Replace UI symbols with JS operators
        let expr = display.value
            .replace(/÷/g, "/")
            .replace(/×/g, "*")
            .replace(/%/g, "/100");
        let result = eval(expr);
        display.value = result;
        expression.value = expression.value + " = " + result;
    } catch {
        display.value = "Error";
    }
}
