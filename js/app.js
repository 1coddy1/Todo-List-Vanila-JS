let input = document.querySelector('.input');
let button = document.querySelector('.button');
let todo = document.querySelector('.todoList');

let todoList = [];

if (localStorage.getItem('TodoList')) {
	todoList = JSON.parse(localStorage.getItem('TodoList'));
	displayTodo();
};

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
		todo: input.value
	}

	todoList.push(objTodo);
	displayTodo();
	localStorage.setItem('TodoList', JSON.stringify(todoList));
});

function displayTodo () {

	let display = '';

	todoList.forEach((element) => {
		display += `
		<li class="todoList_item">
			<span><i id="todoList_icon" class="fas fa-trash"></i></span>${element.todo}
		</li>
		`;
		todo.innerHTML = display;
	});

	input.value = '';
	button.classList.remove('active');
};