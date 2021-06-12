const gameBoard = document.getElementById("gameBoard");
let boardSize = Number(prompt("How many squares per side?"));

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



makeGrid(boardSize, boardSize);

document.querySelectorAll(".cell").forEach(item => {
    item.addEventListener("mouseover", event => {
        item.style.backgroundColor = 'red';
    });
});
