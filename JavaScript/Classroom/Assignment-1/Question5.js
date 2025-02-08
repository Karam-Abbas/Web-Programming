let books = [
  {
    title: "Book1",
    author: "Author1",
    pages: 100,
  },
  {
    title: "Book2",
    author: "Author2",
    pages: 200,
  },
  {
    title: "Book3",
    author: "Author3",
    pages: 300,
  },
  {
    title: "Book4",
    author: "Author4",
    pages: 400,
  },
];
//named function
function getBookTitles(arr){
    return arr.map((book)=>book.title); 
    // iterates over the array and returns the title of each element of the obj and then and stores all the titles in a separate array and returns that array
}
// anonymous function
const findBooksByAuthor = function(arr,author){
    return arr.filter((book)=>book.author===author);
    // iterates over each index and then returns only those book whose author name matches the author passed as a param
}

// arrow function
const pageCounter = (arr) =>{
    // I assume by the question mean the accumulated number of pages of all the books in the array
    return arr.reduce((prev,book)=>{
        prev += book.pages
        return prev;
    },0) // (callback,initial_value of the accumulated variable in the reduce function)
}


console.log(getBookTitles(books))
console.log(findBooksByAuthor(books,"Author3"))
console.log(pageCounter(books))