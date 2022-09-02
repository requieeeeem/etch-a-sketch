const applyBtn = document.querySelector('.apply')
const gridSize = document.querySelector('input')
const box = document.querySelector('.box')
const sizeDisp = document.querySelector('.sizedisplay')
const redBtn = document.getElementById('red')
const blueBtn = document.getElementById('blue')
const rainbowBtn = document.getElementById('rainbow')
let size = 8;
sizeDisp.textContent = `${gridSize.value}x${gridSize.value}`


applyBtn.addEventListener('click', () => { //add click listener to size selecting buttons
    size = gridSize.value
    reset()
    createColumn(size)
    createSquare(size)
    }
)

gridSize.addEventListener('input', () => { //live display of the grid size
    sizeDisp.textContent = `${gridSize.value}x${gridSize.value}`
})

redBtn.addEventListener('click', () => //add listener to change the color of squares when hovered
    document.querySelectorAll('div.square').forEach(item => item.addEventListener('mouseover', () => item.style.backgroundColor = 'red')))

blueBtn.addEventListener('click', () =>
    document.querySelectorAll('div.square').forEach(item => item.addEventListener('mouseover', () => item.style.backgroundColor = 'blue')))

rainbowBtn.addEventListener('click', () =>
    document.querySelectorAll('div.square').forEach(item => item.addEventListener('mouseover', () => item.style.backgroundColor = randomColor())))

function randomColor() { //randomize a color
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
  return color;
}

function createColumn(size) { //create column divs
    for (let i=0; i<size; i++) {
        const column = document.createElement('div')
        column.classList.add('column')
        box.appendChild(column)
    }
}

function createSquare(size) { //create squares in the div columns
    const columns = document.querySelectorAll('.column')
    for (const column of columns) {
        for (let i=0; i<size; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
            square.style.backgroundColor = 'white'
            column.appendChild(square)
        }
    }
    document.querySelectorAll('div.square').forEach(item => item.addEventListener('mouseover', () => item.style.backgroundColor = 'red')) //turn the square red when hovered over
}

function reset() {
    while (box.firstChild) {
        box.removeChild(box.firstChild)
    }
}
createColumn(size)
createSquare(size)
