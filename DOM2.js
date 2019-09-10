  
var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    book.textContent +=' (book title)';
});

const bookList =document.querySelector('#book-list');
bookList.innerHTML= '<h2>Books and more books...</h2>'
bookList.innerHTML += '<p>This is how you add HTML</p>'
    


// const search = document.getElementById('search-books');
// const bookList = document.getElementById('book-list');

// console.log(search, bookList);