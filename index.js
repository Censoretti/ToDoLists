window.addEventListener('load', () => {
	const form = document.querySelector('#newTaskForm')
	const input = document.querySelector('#newTaskInput')
	const listElement = document.querySelector('#tasks')

	form.addEventListener('submit', (e) => {
		e.preventDefault()

		const task = input.value

		const taskElement = document.createElement('div')
		taskElement.classList.add('task')
		
		const taskContentElement = document.createElement('div')
		taskContentElement.classList.add('content')
		// taskContentElement.innerText = task
		
		const taskInputElement = document.createElement('input')
		taskInputElement.classList.add('text')
		taskInputElement.type = 'text'
		taskInputElement.value = task
		taskInputElement.setAttribute('readonly', 'readonly')
		
		const taskActionsElement = document.createElement('div')
		taskActionsElement.classList.add('actions')
		
		const taskEditElement = document.createElement('button')
		taskEditElement.classList.add('edit')
		taskEditElement.innerHTML = 'Edit'
		
		const taskDeleteElement = document.createElement('button')
		taskDeleteElement.classList.add('delete')
		taskDeleteElement.innerHTML = 'Delete'
		
		taskContentElement.appendChild(taskInputElement)
		taskElement.appendChild(taskContentElement)
		taskElement.appendChild(taskActionsElement)
		taskActionsElement.appendChild(taskEditElement)
		taskActionsElement.appendChild(taskDeleteElement)
		listElement.appendChild(taskElement)

		input.value = ''

		taskEditElement.addEventListener('click', () => {
			if(taskEditElement.innerText.toLocaleLowerCase() == 'edit') {
				taskInputElement.removeAttribute('readonly')
				taskInputElement.focus()
				taskEditElement.innerText = 'save'
			} else {
				taskInputElement.setAttribute('readonly', 'readonly')
				taskEditElement.innerText = 'edit'
			}
		})

		taskDeleteElement.addEventListener('click', () => {
			listElement.removeChild(taskElement)
		})
	})
})
