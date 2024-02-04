// console.log(document.getElementsByTagName('div')[2]);
// let form = document.querySelector('form');
// console.log(form.parentNode);

function updateWeekday(day){
    let h4 = document.querySelector('h4')
    h4.textContent = day
    h4.id = day.toLowerCase()
    h4.className = 'title'
    h4.style.color = 'orange'
    
}
updateWeekday('Sunday');

function updateTitle(title){
    let h3 = document.querySelector('h3')
    h3.innerText = title
    h3.style.color = 'Blue'
}
updateTitle('My Daily TODO!!')

function addImage(img_url){
    let img = document.querySelector('img')
    img.src = img_url
}
addImage('https://images.unsplash.com/photo-1613575573097-15f53a39267a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')

document.querySelector('form').addEventListener
('mouseover', e => console.log(e))

// create an alert
document.querySelector('#alert').addEventListener
('click', function(){
 return alert("Hi I was clicked")
})

// LOg something
document.querySelector('#log').addEventListener
('click', function(){
    console.log('this is me I\'ve been logged!')
})

// Grab button and deletes parent Node 

function addEventListenerToDeleteButtons(){
    let buttons = document.getElementsByClassName
    ('delete_btn')
    for (let btn of buttons){
        btn.addEventListener('click', handleDelete)
    }
}
addEventListenerToDeleteButtons()

// callback that will delete task
function handleDelete(e){
    e.target.parentNode.remove()
}

// BUILDING FORM
document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        buildToDO(e.target.new_todo.value)
        form.reset()

    })
})

function buildToDO(todo){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)

    btn.textContent = 'x'
    p.textContent= `${todo}`
    p.appendChild(btn)
    console.log(p)
    document.querySelector('#todo_container').appendChild(p)
}