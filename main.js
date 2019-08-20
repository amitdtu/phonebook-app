const name = document.querySelector('#name');
const number = document.querySelector('#number');
const addBtn = document.querySelector('#addBtn');
const removeBtn = document.querySelector('#removeBtn');

const ul = document.querySelector('.list-group');

const deleteBtn = document.querySelectorAll('.btn-danger');

const filter = document.querySelector('#filter');
const msg = document.querySelector('.msg');


addBtn.addEventListener('click', add)
function add(e){
    e.preventDefault();
    if(isNaN(name.value) && !(isNaN(number.value))){
        html = `<li class="list-group-item d-flex justify-content-between"><span>${name.value}</span> <span>${number.value} <button class="ml-3 btn btn-danger">delete</button></span></li>`
    ul.insertAdjacentHTML('beforeend', html)
    name.value = '';
    number.value = '';
    name.focus();
    } else{
        msg.classList.add('error');
        msg.textContent = 'Enter a valid input';
        setTimeout(()=> msg.remove(), 2500)
        name.value = '';
        number.value = '';
        name.focus();
    }
    
}

removeBtn.addEventListener('click', removeAll)
function removeAll(e){
    e.preventDefault()
    const li = ul.children;
    for(i=0; i<li.length; i++){
       while(li[i]){
           ul.removeChild(li[i])
       }
}
}

ul.addEventListener('click', deleteItem)
function deleteItem(e){
    const li = e.target.parentNode.parentNode;
    ul.removeChild(li)
}


filter.addEventListener('keyup', filterItems)

function filterItems(e) {
   text =  e.target.value.toLowerCase();
    
    items = ul.children;
//    console.log(items.length)
    
    Array.from(items).forEach((item) => {
        listItem = item.textContent.replace('delete', '').toLowerCase();
        
        if(listItem.indexOf(text) != -1){
            item.classList.add('d-flex')
        } else{
            item.classList.remove('d-flex');
            item.classList.add('d-none')
        }
    })
}



//const test  = document.querySelector('#test')
//
//let rm  = test.classList.remove('d-flex')
//let ad = test.classList.add('d-none')
//
//console.log(test.classList)















