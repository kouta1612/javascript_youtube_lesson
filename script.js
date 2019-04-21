var list = document.querySelector('#list');
var headLine = document.getElementById('head');
var button = document.getElementById('button');
var listItems = document.querySelectorAll('ul li');

list.addEventListener('click', activateItem);

function activateItem(e) {
    if (e.target.nodeName == 'LI') {
        headLine.innerHTML = e.target.innerHTML;
        for (var i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }
}

button.addEventListener('click', createItem);

function createItem() {
    list.innerHTML += '<li>something new</li>';
}
