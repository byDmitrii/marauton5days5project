
const button_up = document.querySelector('.up-button')

const button_down = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const main_slide = document.querySelector('.main-slide')
const count_slides = main_slide.querySelectorAll('div').length

const container = document.querySelector('.container')

let active_slide_ind = 0

sidebar.style.top = `-${(count_slides - 1)*100}vh`

button_up.addEventListener('click', () =>{
    changeSlide('up')
})

button_down.addEventListener('click', () =>{
    changeSlide('down')
})

document.addEventListener('keydown', event =>{
    if (event.key === 'ArrowUp'){
        changeSlide('up')
    } else if (event.key === 'ArrowDown'){
        changeSlide('down')
    }
})

function changeSlide(direction){
    if(direction === 'up'){
        active_slide_ind += 1
        if(active_slide_ind === count_slides){
            active_slide_ind = 0
        }
    } else if(direction === 'down'){
        active_slide_ind -=1
        if(active_slide_ind < 0){
            active_slide_ind = count_slides - 1
        }
    }

    const height = container.clientHeight

    main_slide.style.transform = `translateY(-${active_slide_ind*height}px)`

    sidebar.style.transform = `translateY(${active_slide_ind*height}px)`
}