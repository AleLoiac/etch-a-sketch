const container = document.querySelector(".container");
const body = document.querySelector("body");

const buttonSetGrid = document.createElement("button");
buttonSetGrid.textContent = "Set Grid";

body.insertBefore(buttonSetGrid, container);

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
        const totalSquares = number * number;

        for (let i = 0; i < totalSquares; i++) {
            const squareDiv = document.createElement("div");
            squareDiv.style.width = 800/number + "px";
            squareDiv.style.height = 800/number + "px";
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
    let opacity = Number(target.style.opacity);

    if (target.classList.value === "hover") {
        // make it random only on the first hovering
        if (target.style.background === "") {
            target.style.background = getRandomColor();
        }
        opacity += 0.1;
        target.style.opacity = opacity;
    }
})

generateGrid(16);

buttonSetGrid.addEventListener("click", () => {
    const num = prompt("Insert new grid size:")
    removeGrid();
    generateGrid(num);
});