const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

let boxTop = 200;
let boxLeft = 200;

let main = document.querySelector("main");

// This loop is creating a div for each column

for (let column of map) {
    const colElement = document.createElement("div")
    colElement.classList.add("column")
    main.appendChild(colElement)
    
// This loop is creating cell divs inside of the columns
    
    for (let cell of column) {
        const cellElement = document.createElement("div")
        cellElement.classList.add("cell")
        colElement.appendChild(cellElement)
        if (cell === "W") {
            cellElement.classList.add("wall")
        }
    }
}

