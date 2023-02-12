
const board = document.querySelector('#board')

const SQUARE_NUMBERS = 500;
const colors = ['#FFFFD2','#FCBAD3','#AA96DA','#A8D8EA','#EAFFD0']

for(let i = 0; i < SQUARE_NUMBERS; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', deleteColor)

    board.append(square)
}

function setColor(event){
    const element = event.target
    const color = getRandColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function deleteColor(event){
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #111'
}

function getRandColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}