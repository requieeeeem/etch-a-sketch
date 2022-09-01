const button = document.querySelectorAll('.size')
let size = 0;
button.forEach(item => item.addEventListener('click', () => {
    size = item.value
    createCanvas()
    createSquare()
    }
))

function createCanvas() {
    const box = document.createElement('div')
    box.classList.add('box')
    document.body.appendChild(box)
    for (let i=0; i<size; i++) {
        const cont = document.createElement('div')
        cont.classList.add('container')
        box.appendChild(cont)
    }
    return;
}
function createSquare() {
    const conts = document.querySelectorAll('.container')
    for (const cont of conts) {
        for (let i=0; i<size; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
            cont.appendChild(square)
        }    
    }
    document.querySelectorAll('div.square').forEach(item => item.addEventListener('mouseover', () => item.classList.add('hovered')))
}

