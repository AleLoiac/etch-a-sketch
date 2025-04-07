const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement("div");
    container.appendChild(squareDiv);
    squareDiv.classList.add("hover");
}
const squareNodes = document.querySelectorAll(".hover");

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