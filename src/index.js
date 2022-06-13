document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault()
        handleToDo(event.target.newtask.value)
    })

})

function handleToDo(todo) {

    let task = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', (event) =>
        event.target.parentNode.remove()

    )

    btn.textContent = "  X"

    task.textContent = `   ${todo}`

    task.appendChild(btn)

    document.querySelector('#tasks').appendChild(task)

}

// function handleDelete(event)