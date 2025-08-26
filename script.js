const button = document.querySelector('#button');

button.addEventListener('click', function(){
    const newTask = document.createElement('li')
    const newList = document.getElementById('taskList')
    newList.appendChild(newTask)
    newTask.textContent = document.getElementById('inputTask').value
    document.getElementById('inputTask').value = ""
    deleteTask(newTask)
})

function deleteTask(newTask){
    const deleteButton = document.createElement('button')
    deleteButton.textContent = `Delete`
    newTask.appendChild(deleteButton)
    deleteButton.addEventListener('click', function(){
        newTask.remove()
    })
}