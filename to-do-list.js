
const todoList = [{
    name: 'make dinner',
    dueDate: '22-12-2022'
}, {
    name: 'wash dishes',
    dueDate: '22-12-2022'
}];


renderTodoList();

document.querySelector('.js-add-button')
    .addEventListener('click', addTodo);

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {

        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-button">Delete</button>
        `; //generating the HTML
        todoListHTML += html;
    });
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });

};


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');
    const name = inputElement.value; //save the input text
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    }); //add to array

    inputElement.value = '';    //clear the input text
    dateInputElement.value = ''; //clear the input date
    renderTodoList();
}