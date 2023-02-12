
const start_btn = document.querySelector('#start_btn')
const screens = document.querySelectorAll('.screen')
const time_list = document.querySelector('#time-list')
const time_elem = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#FFFFD2','#FCBAD3','#AA96DA','#A8D8EA','#EAFFD0']

let time_game = 0
let score = 0

start_btn.addEventListener('click', (event)=>{
    event.preventDefault()
    screens[0].classList.add('up')
})

time_list.addEventListener('click', event =>{
    if(event.target.classList.contains('time-btn')){
        time_game = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        start_game()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')){
        score +=1
        event.target.remove()
        create_rand_circle()
    }
})



function start_game(){
    setInterval(decrease_time,1000)
    create_rand_circle()
    set_time(time_game)
}

function finish_game(){
    time_elem.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Score: <span class = "primary">${score}</span></h1>`
}

function decrease_time(){
    if (time_game === 0){
        finish_game()
    } else{
        let current = --time_game
        if(current < 10){
            current = `0${current}`
        }
        set_time(current)
    }
}

function set_time(value){
    time_elem.innerHTML = `00:${value}`
}

function create_rand_circle(){
    const circle = document.createElement('div')
    const size = get_rand_WH_circle_and_pos(5,100)
    const {width,height} = board.getBoundingClientRect()
    const x = get_rand_WH_circle_and_pos(0,width-size)
    const y = get_rand_WH_circle_and_pos(0,height-size)
    setColor(circle)


    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`

    board.append(circle)
}

function get_rand_WH_circle_and_pos(min,max){
    return Math.round(Math.random() * (max-min) + min)
}


function setColor(element){
    const color = getRandColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandColor(){
    const ind = Math.floor(Math.random() * colors.length)
    return colors[ind]
}

function win_game(){
    function kill(){
        const circle = document.querySelector('.circle')
        if (circle){
            circle.click()
        }
    }
    setInterval(kill,50)
}