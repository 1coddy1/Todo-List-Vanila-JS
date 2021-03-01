let input = document.querySelector('.input');
let button = document.querySelector('.button');
let todo = document.querySelector('.todoList');

let todoList = [];

input.addEventListener('keyup', () => {
	let inputValue = input.value;

	if (inputValue.trim() != 0) {
		button.classList.add('active');
	} else {
		button.classList.remove('active');
	}
});

button.addEventListener('click', () => {
	let objTodo = {
		todo: input.value,
		checked: false
	}

	todoList.push(objTodo);
	displayTodo();
});

function displayTodo () {

	let display = '';

	todoList.forEach((element) => {
		display += `
		<li class="todoList_item">
			<span><i id="todoList_icon" class="fas fa-check-square"></i></span>${element.todo}
		</li>
		`;
		todo.innerHTML = display;
	});

	input.value = '';
	button.classList.remove('active');
};