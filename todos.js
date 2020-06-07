var listElement = document.querySelector('.list ul')
var textElement = document.querySelector('.list input')
var buttonElement = document.querySelector('.list button')

var todos = [
    'Fazer Café',
    'Ler um Livro',
    'Acessar site'
]

function rendeTodos(){
    listElement.innerHTML = ''
    for (todo of todos){
        var listaLI = document.createElement('li')
        var texTodo = document.createTextNode(todo)

        listaLI.appendChild(texTodo)
        listElement.appendChild(listaLI)
    }
}
rendeTodos()

function addTodos(){
    var addtodo = textElement.value
    todos.push(addtodo)
    textElement.value = ''
    rendeTodos()
}
buttonElement.onclick = addTodos