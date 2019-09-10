const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is',banner.nodeType);
console.log('#page-banner node name is',banner.nodeName);
console.log('#page-banner has child nodes',banner.hasChildNodes());
// clone a node
const cloneBanner = banner.cloneNode(true);
console.log(cloneBanner);



// const search = document.getElementById('search-books');
// const bookList = document.getElementById('book-list');

// console.log(search, bookList);