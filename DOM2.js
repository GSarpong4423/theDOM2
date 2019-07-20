  
const bookList = document.querySelector('#book-list');

console.log('book-List next siblingis:', bookList.nextSibling);
console.log('book-List next element sibling is:', bookList.nextElementSibling);


console.log('book-List previous siblingis:', bookList.previousSibling);
console.log('book-List previous element sibling is:', bookList.previousElementSibling);


bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else'
// const search = document.getElementById('search-books');
// const bookList = document.getElementById('book-list');

// console.log(search, bookList);