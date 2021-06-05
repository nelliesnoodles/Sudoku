// JavaScript source code -- Matrix Creator
// Creates and dynamically adds the components of the Matrix for the game

ROWS = 9
COLUMNS = 9

MIN = 0
MAX = 8

// According to Google, the minimum number of clues that will make a grid 'unique' is 17.
// So I can do this grid, and reveal 17 random spots of 81, and there will not be multiple solutions. 
// Not that I have any idea how there would be multiple solutions, YET.

/*   DIAGRAM of PLACEMENT *LATIN SQUARES: Thank you Jeff Witt!! 
     *   [A][B][C]  [G][H][I]  [D][E][F]
     *   [D][E][F]  [A][B][C]  [G][H][I]
     *   [G][H][I]  [D][E][F]  [A][B][C]
     * 
     *   [C][A][B]  [I][G][H]  [F][D][E]
     *   [F][D][E]  [C][A][B]  [I][G][H]
     *   [I][G][H]  [F][D][E]  [C][A][B]
     * 
     *   [B][C][A]  [H][I][G]  [E][F][D]
     *   [E][F][D]  [B][C][A]  [H][I][G]
     *   [H][I][G]  [E][F][D]  [B][C][A]
     *   
     *   Each 3 by 3, labeled A - I, needs to have a unique sequence of numbers 1-9. 
     *   THe 3 by 3 (mini matrix), must also adhere to the game rules when the interacting with 
     *   all other mini-matrixs. To accomplish this a pre-set grid of coordinates can be used.
     *   When I have mastered the pattern as to what way the mini-matrixs themselves can be rotated
     *   within the mother matrix (9 by 9), The game will be even more challenging. If a coder looks at the source code
     *   and knows the pattern they could fill the puzzle out without much trouble, but such is the way of puzzles. 
     *   My sister Tammy Hole loves these, so this is more for her than for myself. 
 */

// We will randomly assign the numbers 1-9 to the coordinating letter.
let numberMAP = {
    'A': null,
    'B': null,
    'C': null,
    'D': null,
    'E': null,
    'F': null,
    'G': null,
    'H': null,
    'I': null
}
let NUMS;
// A pre-determined map will be used until I can determine how to rotate the mini matrixes for variety
// See:  ASCII diagram at the top
let COORDS = {
    "0:0": 'A',
    "0:1": 'B',
    "0:2": 'C',
    "0:3": 'G',
    "0:4": 'H',
    "0:5": 'I',
    "0:6": 'D',
    "0:7": 'E',
    "0:8": 'F', // row 1
    "1:0": 'D',
    "1:1": 'E',
    "1:2": 'F',
    "1:3": 'A',
    "1:4": 'B',
    "1:5": 'C',
    "1:6": 'G',
    "1:7": 'H',
    "1:8": 'I', // row2
    "2:0": 'G',
    "2:1": 'H',
    "2:2": 'I',
    "2:3": 'D',
    "2:4": 'E',
    "2:5": 'F',
    "2:6": 'A',
    "2:7": 'B',
    "2:8": 'C', // row 3
    "3:0": 'C',
    "3:1": 'A',
    "3:2": 'B',
    "3:3": 'I',
    "3:4": 'G',
    "3:5": 'H',
    "3:6": 'F',
    "3:7": 'D',
    "3:8": 'E', // ROW 4
    "4:0": 'F',
    "4:1": 'D',
    "4:2": 'E',
    "4:3": 'C',
    "4:4": 'A',
    "4:5": 'B',
    "4:6": 'I',
    "4:7": 'G',
    "4:8": 'H',  // ROW 5
    "5:0": 'I',
    "5:1": 'G',
    "5:2": 'H',
    "5:3": 'F',
    "5:4": 'D',
    "5:5": 'E',
    "5:6": 'C',
    "5:7": 'A',
    "5:8": 'B', // ROW 6
    "6:0": 'B',
    "6:1": 'C',
    "6:2": 'A',
    "6:3": 'H',
    "6:4": 'I',
    "6:5": 'G',
    "6:6": 'E',
    "6:7": 'F',
    "6:8": 'D', // ROW 7
    "7:0": 'E',
    "7:1": 'F',
    "7:2": 'D',
    "7:3": 'B',
    "7:4": 'C',
    "7:5": 'A',
    "7:6": 'H',
    "7:7": 'I',
    "7:8": 'G', // ROW 8
    "8:0": 'H',
    "8:1": 'I',
    "8:2": 'G',
    "8:3": 'E',
    "8:4": 'F',
    "8:5": 'D',
    "8:6": 'B',
    "8:7": 'C',
    "8:8": 'A', // ROW 9
    
}

let USER_FILLED = 0;
let MATRIX;
let SHOW = 17;
function set_DOM() {
    // populate: from matrix.js
    // createHTMLmatrix(): from matrix.js
    MATRIX = populate()
    createHTMLmatrix()

}
// credit for shuffle algorithm: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
function shuffle() {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // Fisher-Yates: see credited article
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    NUMS = arr;
}


function assign_values() {
    // assign 1-9 to the A-I letters in some random fashion.
    // shuffle() assigns a randomized array to the global NUMS
    var index = 0;
    for (const key in numberMAP) {
        var letter = NUMS[index]
        numberMAP[key] = letter
        index++
    }
}

function get_value(id) {
    let val = COORDS[id]
    if (val) {
        return numberMAP[val]
    }
    else {
        console.log('id was not found in the COORDS set: sudoku.js')
    }
    return null
}

function datafill() {
    // go through each cell in the matrix and append it's state
    // state: {visible: bool, value: num, correct: bool}
    let rows = 9
    let columns = 9

    for (i = 0; i < rows; i++) {
        for (j = 0; j < columns; j++) {
            let id = i + ':' + j
            let letter = COORDS[id]
            let val = numberMAP[letter]
            let state = {
                revealed: false,
                value: val,
                mutable: false,

            }
            let cell = MATRIX[i][j]
            cell.push(state)

        }

    }

}



function createGAME() {
    shuffle()
    assign_values()
    assign_values()
    datafill()
    show()
    
}
 // TESTS
function show_matrix() {
    let rows = 9
    let columns = 9

    for (i = 0; i < rows; i++) {


        for (j = 0; j < columns; j++) {
            id =  i + ":" + j
            let element = document.getElementById(id)
            if (element != null && element != undefined) {
                let cell = MATRIX[i][j]
                let obj = cell[0]
                let val = obj.value
                element.setAttribute('value', val);
            }
            
        }
        
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function select_permanent() {
    showArray = []
   
    while (showArray.length < 18) {
        let i = getRandomInt(9)
        let j = getRandomInt(9)
        let id = i + ":" + j;
        if (!showArray.includes(id)) {
            showArray.push(id)
        }

    }
    return showArray
        
}

function show() {
    let showArr = select_permanent() 
    //console.log(showArr)
    for (let index in showArr) {
        let item = showArr[index]
        let coords = item.split(":");
        let i = coords[0]
        let j = coords[1]
        let element = document.getElementById(item)
        if (element != null && element != undefined) {
            let cell = MATRIX[i][j]
            let obj = cell[0]
            element.setAttribute('value', obj.value);
            element.setAttribute('disabled', 'true');
            element.style.background = 'silver';
        }

    }
}

function check() {
    let rows = 9
    let columns = 9

    for (i = 0; i < rows; i++) {


        for (j = 0; j < columns; j++) {
            id = i + ":" + j
            let element = document.getElementById(id)
            if (element != null && element != undefined) {
                let cell = MATRIX[i][j]
                let obj = cell[0]
                let correct = obj.value;
                let current = element.getAttribute('value')
                console.log('value=', current)
                console.log('correct=', correct)
                let main = document.getElementById('GameGrid')
                if (correct != current) {
                    //console.log('*** FALSE ****')
                    
                    main.style.border = '10px solid red';
                }
                else {
                    //console.log('**** TRUE ****')

                    main.style.border = '10px solid lime';

                }

            }
            else {
                console.log("Error, element not found. check(): sudoku.js")
            }
                
        }

    }
    
    return true

}

function printMatrix() {
    for (let i = 0; i < MATRIX.length; i++) {
        console.log('*****', i, '*******')
        let row = MATRIX[i]
        for (let j = 0; j < row.length; j++) {
            console.log('*', j, '*')
            let cell = row[j]
            console.log(cell[0])

        }
    }
}


window.addEventListener('load', (event => {
    set_DOM();
    createGAME();
    
    // test
    // show_matrix();
    // printMatrix();


}));





