/*========================== UI ============================*/

const createMenu = document.querySelector('.create-menu')
const taskList = document.querySelector('.all-lists')
const createMenuBtn = document.querySelector('.open-menu')
const OpenListBtn = document.querySelector('.open-list')
const createNewList = document.querySelector('.create-list')
const DeleteListModal = document.querySelector('.delete-list-modal')

const removeListBtn = document.querySelector('.remove-list')
const confirmBtn = document.querySelector('.confirm')
const cancelBtn = document.querySelector('.cancel')
const modalShadow = document.querySelector('.modal-shadow')

removeListBtn.addEventListener('click', ()=>{
    DeleteListModal.style.display = 'block'
    DeleteListModal.style.pointerEvents = 'auto'
    modalShadow.style.display = 'block'
})

confirmBtn.addEventListener('click', ()=>{
    DeleteListModal.style.display = 'none'
    DeleteListModal.style.pointerEvents = 'none'
    modalShadow.style.display = 'none'
})

cancelBtn.addEventListener('click', ()=>{
    DeleteListModal.style.display = 'none'
    DeleteListModal.style.pointerEvents = 'none'
    modalShadow.style.display = 'none'
})

alterModalRemoveList = () => {
    const closeBtn = document.querySelector('.remove-list')
    closeBtn.addEventListener('click')
}

createMenuBtn.addEventListener('click', () =>{
    if(!createMenu.classList.contains('show-create')){
        createMenu.classList.add('show-create')
        modalShadow.style.display = 'block'
    } else if(createMenu.classList.contains('show-create')){
        createMenu.classList.remove('show-create')
        modalShadow.style.display = 'none'
    }

    taskList.classList.remove('show-list-menu')
})

OpenListBtn.addEventListener('click', ()=>{
    if(!taskList.classList.contains('show-list-menu')){
        taskList.classList.add('show-list-menu')
    } else if(taskList.classList.contains('show-list-menu')){
        taskList.classList.remove('show-list-menu')
    }

    createMenu.classList.remove('show-create')
    createMenu.classList.remove('show-create')
        modalShadow.style.display = 'none'
})

const tasks = document.querySelector('.tasks')
const lists = document.querySelector('.all-lists ul')
const removeListItemBtn = document.querySelectorAll('.close')

removeListItemBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        removeList()
    })
})

let myLists = [
    
]

function List(name){
    this.name = name
    this.taks = []
}

function listItemSelectEffect(){
    const listItems = document.querySelectorAll('.list-name')
    for(let i = 0; i<listItems.length; i++){
        listItems[i].addEventListener('click',()=>{
            listItems.forEach(item => item.classList.remove('active-list'))
            listItems[i].classList.add('active-list')
        })
    }
}

const createList = document.querySelector('.create-list')
createList.addEventListener('click', function(e){
    e.preventDefault()
    addNewList()
})

function addNewList() {
    const newListInputValue = document.querySelector('.new-list').value

    if(newListInputValue !== ''){
        myLists.push(new List(newListInputValue))
        displayList()
        listItemSelectEffect()
        createMenu.classList.remove('show-create')
        modalShadow.style.display = 'none'
    } else {
        return
    }
    document.querySelector('.new-list').value = ''
}

function removeList(i){
    myLists.splice(i,1)
    displayList()
}

function displayList() {
    lists.innerHTML = ''
    for(let i = 0; i < myLists.length; i++){
        const list = document.createElement('li')
        list.className = 'list-name'
        list.innerHTML = 
        `<h3>${myLists[i].name}</h3>
        <div><i class="fa-solid fa-xmark close" onclick = 'removeList(${i})'></i></div>`
        lists.append(list)
        
    }
    if(lists.lastChild){
        lists.lastChild.classList.add('active-list')
    }
}

