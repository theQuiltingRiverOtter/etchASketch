const gameBoard = document.querySelector("#gameBoard");
let boardSize = 16;
let isBorders = false;
let isRainbow = true;

function makeCell(number, row) {
    const cell = document.createElement("div");
    let cellWidth = Math.floor(500 / number);
    cellWidth = cellWidth.toString() + 'px';
    cell.style.width = cellWidth;
    cell.classList.add("cell");
    row.appendChild(cell)
}

function makeRow(number) {
    const row = document.createElement("div");
    let rowHeight = Math.floor(500 / number);
    rowHeight = rowHeight.toString() + "px";
    row.style.backgroundColor = 'white';
    row.style.height = rowHeight;
    row.classList.add('row');
    gameBoard.appendChild(row);
    return row;
}

function makeGrid(rows, columns) {
    for (let i = 0; i < rows; i++) {
        let row = makeRow(rows);
        for (let j = 0; j < columns; j++) {
            makeCell(columns, row);
        }
    }
}
function randomNumber() {
    newNum = Math.floor(Math.random() * 256);
    return newNum;

}

function colorChanger() {
    let colorString = '';
    if (isRainbow) {
        let color = randomNumber();
        let color2 = randomNumber();
        let color3 = randomNumber();
        colorString = "rgb(" + color + "," + color2 + "," + color3 + ")"
    } else {
        colorString = 'black';
    }

    return colorString;
}

function rainbowCells() {
    isRainbow = true;
}
function blackCells() {
    isRainbow = false;
}

function clearGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    })
}
function etchASketch() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener('mouseover', event => {
            let color = colorChanger();
            cell.style.backgroundColor = color;
        });
    })

}

function changeGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.innerHTML = '';
    })
    gameBoard.innerHTML = '';
    boardSize = Number(prompt("Enter a number of squares"));
    if (boardSize > 100) {
        boardSize = 100;
    } else if (boardSize < 5) {
        boardSize = 5;
    }
    makeGrid(boardSize, boardSize);
    etchASketch();
}

function makeBorders() {
    const cells = document.querySelectorAll(".cell");
    if (!isBorders) {
        cells.forEach(cell => {
            cell.style.border = '1px solid black';
        })
        isBorders = true;
    } else {
        cells.forEach(cell => {
            cell.style.border = 'none';
        })
        isBorders = false;
    }

}


makeGrid(boardSize, boardSize);
etchASketch();

const gridClear = document.querySelector("#gridClear");
const gridChange = document.querySelector("#gridChange");
const borders = document.querySelector("#borders");
const rainbow = document.querySelector("#rainbow");
const black = document.querySelector("#black");


gridClear.addEventListener("click", clearGrid);
gridChange.addEventListener("click", changeGrid);
borders.addEventListener("click", makeBorders);
rainbow.addEventListener("click", rainbowCells);
black.addEventListener("click", blackCells);
