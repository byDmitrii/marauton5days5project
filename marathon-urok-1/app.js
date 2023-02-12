
function slide_select(slide_active = 0) {
    const slides = document.querySelectorAll('.slide')

slides[slide_active].classList.add('active')

for (const slide of slides){
    slide.addEventListener('click', () => {
        clearActiveClass()
        slide.classList.add('active')
    })
}

function clearActiveClass(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
}

slide_select()