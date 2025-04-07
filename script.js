const container = document.querySelector(".container");
const body = document.querySelector("body");

const buttonSetGrid = document.createElement("button");
buttonSetGrid.textContent = "Set Grid";

body.insertBefore(buttonSetGrid, container);

buttonSetGrid.addEventListener("click", removeGrid);

function removeGrid () {
    const squareNodes = document.querySelectorAll(".hover");
    for (square of squareNodes) {
        container.removeChild(square);
    }
}

function generateGrid (number) {
    if (number > 100 || number < 1) {
        alert("Invalid number");
        return;
    } else {
        totalSquares = number * number;
        for (let i = 0; i < totalSquares; i++) {
            const squareDiv = document.createElement("div");
            container.appendChild(squareDiv);
            squareDiv.classList.add("hover");
        }
    }
}

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

container.addEventListener("mouseover", (e) => {
    const target = e.target;

    if (target.classList.value === "hover") {
        target.style.background = getRandomColor();
    }
})

generateGrid(16);