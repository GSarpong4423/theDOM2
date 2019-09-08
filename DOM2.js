const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li)
    }
});

//  ADD BOOK
const addForm = document.forms['add-book']

addForm. addEventListener('submit', function(e){
    e.preventDefault()
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value)
    
    
    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    
    //  add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;
    
    // append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
});

// hide books
const hideBox =document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display ="none"
    } else{
        list.style.display = "initial";
    }
});
// const search = document.getElementById('search-books');
// const bookList = document.getElementById('book-list');

// console.log(search, bookList);