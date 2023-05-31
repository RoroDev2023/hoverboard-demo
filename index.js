const SQUARES = 450;
const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    document.getElementById("container").appendChild(square);
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener("mouseout", () => removeColor(square))
    container.appendChild(square)
    
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = "0 0 2px ${color}";
}

function removeColor(element) {
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #1d1d1d";
}

  
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}