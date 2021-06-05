// JavaScript source code
// Also used in MineSweeper


let ROWS = 9;
let COLUMNS = 9;



/*  visual of a 9 by 9 matrix
 *  [
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
   
]
 */


function populate() {
    var rows = ROWS
    var columns = COLUMNS
  


  // console.log(rows, columns)
  matrix = [];
  for (i = 0; i < rows; i++) {
    const row = [];
    for (j = 0; j < columns; j++) {
      column = [];
      row.push(column);
    }
    matrix.push(row);
  }
  return matrix;
}

function createHTMLmatrix() {
    const rows = ROWS
    const columns = COLUMNS
    const FIELD = document.querySelector('#GameGrid');


  for (i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');


    for (j = 0; j < columns; j++) {
      const cell = document.createElement('input');
      cell.classList.add('cell');
      // this id will help us locate the cell or data in the matrix
      const cellCoords = i + ':' + j;
      cell.id = cellCoords;
        cell.setAttribute('min', 1);
        cell.setAttribute('max', 9);
        cell.setAttribute('type', 'number');
        cell.setAttribute('pattern', '[0-9]');

      row.appendChild(cell);
    }
    FIELD.appendChild(row);
  }
}


