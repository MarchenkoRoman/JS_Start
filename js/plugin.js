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

inputText.addEventListener('change', function (e) {
    console.log(this.value,e);
});
generateList(tasks);

//console.log(deleteButton);

// let btn = document.querySelector('.clear-btn');
//
// btn.addEventListener("click", function(e) {
//     console.log(e);
// })
// console.dir(btn);