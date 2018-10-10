let tasks = [
    'Learn JavaScript',
    'Learn Angular 4',
    'Go to the Conference'
];

let ul = document.querySelector('.list-group');
let form = document.forms['addToDoItem'];
let inputText = form.elements['todoText'];

function listTemplate(task) {
    let li = document.createElement('li');
    li.textContent = task;
    li.className = 'list-group-item d-flex align-items-center';

    let iDelete = document.createElement('i');
    iDelete.className = 'fas fa-trash delete-item ml-auto';

   li.appendChild(iDelete);
    return li;
}

function clearList() {
    ul.innerHTML = '';
}

function generateList(tasksArray) {

    clearList();

    for (let i = 0; i < tasksArray.length; i++) {
        let li = listTemplate(tasksArray[i]);
        ul.appendChild(li);
    }
}

function addList (list) {
    tasks.push(list);
    ul.insertAdjacentElement('beforeend', listTemplate(list));
}

/*function setDeleteEvent() {
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('click', function(e) {
            console.log('click');
        });
    }
}*/

function deleteListItem(target) {
    let parent = target.closest('li');
    let index = tasks.indexOf(parent.textContent);
    tasks.splice(index, 1);
    parent.remove();
}

ul.addEventListener('click',function(e) {
    if (e.target.classList.contains('delete-item') ) {
        deleteListItem(e.target);
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if ( !inputText.value ) {
        inputText.classList.add('is-invalid')
    } else {
        inputText.classList.remove('is-invalid');
        addList(inputText.value);
        form.reset();
    }
});

inputText.addEventListener('keyup', function () {
    if (inputText.value) {
        inputText.classList.remove('is-invalid');
    }
});
generateList(tasks);

let body = document.body;
let taskWrap = document.querySelector('.tasks-wrap');
let container = document.querySelector('.container');
let listCard = document.querySelector('.list-card');
let cardBody = document.querySelector('.list-card .card-body');
let listGroup = document.querySelector('.list-group');

listGroup.addEventListener('click', function (e) {
    console.log('list-group');
});

cardBody.addEventListener('click', function (e) {
    console.log('list-card card-body');
});

listCard.addEventListener('click', function (e) {
    e.stopImmediatePropagation();
    console.log('listCard');
});

container.addEventListener('click', function (e) {
    console.log('container');
});

taskWrap.addEventListener('click', function (e) {
    console.log('tasks-wrap');
});

//console.log(deleteButton);

// let btn = document.querySelector('.clear-btn');
//
// btn.addEventListener("click", function(e) {
//     console.log(e);
// })
// console.dir(btn);