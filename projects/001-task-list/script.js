'use strict';

const inputTextDOM = document.getElementById('input__text');
const listDOM = document.getElementById('list');

const list = [];

const render = () => {
    listDOM.innerText = '';

    list.forEach((task, index) => {
       const taskElement = document.createElement('li');
       taskElement.innerText = task.text;
       taskElement.classList.add('item');

       if (task.completed) {
           taskElement.classList.add('completed');
       }

       taskElement.addEventListener("click", (event) => {
           event.preventDefault();

           list[index].completed = !list[index].completed;

           render();
       });

        taskElement.addEventListener("contextmenu", (event) => {
            event.preventDefault();

            list.splice(index, 1);

            render();
        });

       listDOM.appendChild(taskElement);
    })
}

inputTextDOM.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && inputTextDOM.value.length > 0) {
        event.preventDefault();

        const task = {
            text: inputTextDOM.value,
            completed: false
        }

        list.push(task);

        inputTextDOM.value = '';

        render();
    }
});

render();
