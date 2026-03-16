const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            currentInput = "";
            input.value = "";
        }

        else if (value === "DEL") {
            currentInput = currentInput.slice(0, -1);
            input.value = currentInput;
        }

        else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
                input.value = currentInput;
            } catch {
                input.value = "Error";
                currentInput = "";
            }
        }

        else if (value === "+/-") {
            if (currentInput) {
                currentInput = (parseFloat(currentInput) * -1).toString();
                input.value = currentInput;
            }
        }

        else {
            currentInput += value;
            input.value = currentInput;
        }
    });
});
