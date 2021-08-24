const input = document.querySelector('input')
const btn = document.querySelector('button')
const todolist=document.querySelector('.todo-list')

const todos = [
    {
        title : "THA 10" ,
        done : false
    },
    {
        title : "THA 11" ,
        done : false
    }   
]

function loadTodo(){
    todos.map(todo => {
        const newtodo = document.createElement('div');
        newtodo.innerHTML = todo.title;
        todolist.appendChild(newtodo);
    })
}

loadTodo();

btn.addEventListener('click' , () => {
    const newtodo = document.createElement('div');
    newtodo.innerHTML = input.value;
    todolist.appendChild(newtodo);
    input.value="";
})

localStorage.setItem('todos' , todos);

const newTodo = localStorage.getItem("todos");
console.log(newTodo);
