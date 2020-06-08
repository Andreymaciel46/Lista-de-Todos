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

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href','#')
        var linkDelet = document.createTextNode('Excluir')

        linkElement.appendChild(linkDelet)

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick','deletTodos('+ pos +')')

        listaLI.appendChild(texTodo)
        listaLI.appendChild(linkElement)
        listElement.appendChild(listaLI)
    }
}
rendeTodos()

function addTodos(){
    var addtodo = textElement.value
    todos.push(addtodo) //Adiciona itens a lista
    textElement.value = ''
    rendeTodos()
}
buttonElement.onclick = addTodos

function deletTodos(pos){
    todos.splice(pos, 1) //Remove itens da lista
    rendeTodos()
}