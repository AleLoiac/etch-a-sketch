const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement("div");
    container.appendChild(squareDiv);
    squareDiv.classList.add("hover");
}
const squareNodes = document.querySelectorAll(".hover");

container.addEventListener("mouseover", (e) => {
    const target = e.target;

    if (target.classList.value === "hover") {
        target.style.background = "black";
    }
})