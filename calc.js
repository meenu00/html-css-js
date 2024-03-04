document.addEventListener('DOMContentLoaded', function () {
    // Initializing variables
    var first_number = document.getElementById("input1");
    var second_number = document.getElementById("input2");
    var data = 0;

    // Add function
    function add() {
        data = Number(first_number.value) + Number(second_number.value);
        document.getElementById("answer").innerText = data;
    }

    // Subtract function
    function subtract() {
        data = Number(first_number.value) - Number(second_number.value);
        document.getElementById("answer").innerText = data;
    }

    // Multiply function
    function multiply() {
        data = Number(first_number.value) * Number(second_number.value);
        document.getElementById("answer").innerText = data;
    }

    // Divide function
    function divide() {
        data = Number(first_number.value) / Number(second_number.value);
        document.getElementById("answer").innerText = data;
    }

    // Clear function
    function clearResult() {
        data = 0;
        document.getElementById("answer").innerText = data;
    }
});