const item = document.querySelector('.item')
const place_holders = document.querySelectorAll('.placeholder')


item.addEventListener('dragstart', dragstart_place)
item.addEventListener('dragend', dragend_place)

for (const placeholder of place_holders){
    placeholder.addEventListener('dragover',dragover)
    
    placeholder.addEventListener('dragenter',dragenter)
    
    placeholder.addEventListener('dragleave', dragleave)
    
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart_place(event){
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    },0)
}

function dragend_place(event){
    event.target.className = 'item'
}

function dragover(event){
    event.preventDefault()
}

function dragenter(event){
    event.target.classList.add('hovered')
}

function dragleave(event){
    event.target.classList.remove('hovered')
}

function dragdrop(event){
    event.target.classList.remove('hovered')
    event.target.append(item)
}