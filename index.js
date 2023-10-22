const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach(item => {
  console.log(`${item.authorFirst} ${item.authorLast} wrote ${item.name} in ${item.publishDate}`);
});

//Sort books from oldest to most recent
const oldrecent = books.slice().sort((a, b) => a.publishDate - b.publishDate);
console.log(oldrecent);

//sort books alphabetically
books.sort((a,b) => a.name.localeCompare(b.name));
console.log(books)
//Find who wrote War and Peace
const booktofind = "War and Peace"
const foundBook = books.find(book => book.name === booktofind);
console.log(console.log(foundBook.authorFirst + ' ' + foundBook.authorLast)
); 
//how  many books were written before 1900?
const booksPublishedBefore1900 = books.filter(book => book.publishDate < 1900);
const count = booksPublishedBefore1900.length;

console.log(`books before 1900: ${count}`);

//how many books published within the last 100 years?
const lastyear = new Date().getFullYear();
const last100 = lastyear - 100;
const lastcentury = books.filter(book=> book.publishDate >= last100 && book.publishDate<= lastyear);
console.log(lastcentury)

//was every book published within the last 100 years?
const currentYear = new Date().getFullYear();
const yearsAgo = 100; // You can adjust this number to change the time frame

const isPublishedInPast100Years = books.every(book => currentYear - book.publishDate <= yearsAgo);

if (isPublishedInPast100Years) {
  console.log("true");
} else {
  console.log("false");
}

//print a list of books that "includes" the genre historical
const historicalBooks = books.filter(book => book.genre.includes("historical"));

historicalBooks.forEach(book => {
  console.log(book.name);
});
