const todo = {
    action(e) {
        const target = e.target;
        if (target.classList.contains('todo__action')) {
            const action = target.dataset.todoAction;
            const elemItem = target.closest('.todo__item');
            if (action === 'deleted' && elemItem.dataset.todoState === 'deleted') {
                elemItem.remove();
            } else {
                elemItem.dataset.todoState = action;
            }
            this.save();
        } else if (target.classList.contains('todo__add')) {
            this.add();
            this.save();
        }
    },
    add() {
        const elemText = document.querySelector('.todo__text');
        if (elemText.disabled || !elemText.value.length || elemText.value.trim() === '') {
            return;
        }
        document.querySelector('.todo__items').insertAdjacentHTML('beforeend', this.create(elemText.value));
        elemText.value = '';
    },
    create(text) {
        return `<li class="todo__item" data-todo-state="active">
        <span class="todo__task">${text}</span>
        <span class="todo__action todo__action_restore" data-todo-action="active"></span>
        <span class="todo__action todo__action_complete" data-todo-action="completed"></span>
        <span class="todo__action todo__action_delete" data-todo-action="deleted"></span></li>`;
    },
    init() {
        const fromStorage = localStorage.getItem('todo');
        if (fromStorage) {
            document.querySelector('.todo__items').innerHTML = fromStorage;
        }
        document.querySelector('.todo__options').addEventListener('change', this.update);
        document.addEventListener('click', this.action.bind(this));
    },
    update() {
        const option = document.querySelector('.todo__options').value;
        document.querySelector('.todo__items').dataset.todoOption = option;
        document.querySelector('.todo__text').disabled = option !== 'active';
    },
    save() {
        localStorage.setItem('todo', document.querySelector('.todo__items').innerHTML);
    }
}

todo.init();

// Написать приложение ToDo list, которое умеет создавать, удалять и отметить как завершенные записи.

// Критерии оценивания:

// Есть input, в поле которого, можно ввести любое значение
// Есть button, по нажатию на который, создается локально запись
// Есть список, который выводит созданные записи
// У каждого элемента списка есть кнопка удалить запись
// Каждый элемент списка можно отметить как завершенный (например зачеркнуть)
// Если нажать удалить, удаляет запись локально и в списке


// Бонус:

// Реализовать редактирование записи. Если нажать на кнопку редактировать, есть возможность поменять название записи и она поменяет ее локально в списке
// Добавить валидацию. То есть проверку на пустоту, пробелы. Отключать кнопку, если некорректное значение введено и если корректное то включать.


// Совет: чтобы отследить событие ввода с input тега можно использовать onchange или oninput
