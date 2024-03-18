const res = document.getElementById("result");

function calculate(value) {
    const calculateValue = eval(value || null);
    if (isNaN(calculateValue)) {
        res.value = "Can't divide 0";
        setTimeout(() => {
            res.value = "";
        }, 1500);
    } else {
        res.value = calculateValue;
    }    
}

function update(enteredValue) {
    if (!res.value) {
        res.value = "";
    }
    const lastChar = res.value.slice(-1);
    if (!(/[+\-*\/]/.test(lastChar) && /[+\-*\/]/.test(enteredValue))) {
        res.value += enteredValue;
    }
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
    e.preventDefault();
    const lastChar = res.value.slice(-1);
    if (/[0-9]/.test(e.key)) {
        res.value += e.key;
    } else if (/[+\-*\/]/.test(e.key) && !(/[+\-*\/]/.test(lastChar))) {
        res.value += e.key;
    } else if (e.key === ".") {
        res.value += ".";
    }
    if (e.key === "Enter") {
        calculate(res.value);
    }

    if (e.key === "Backspace") {
        const resultInput = res.value;
        res.value = resultInput.substring(0, res.value.length - 1);
    }
}
