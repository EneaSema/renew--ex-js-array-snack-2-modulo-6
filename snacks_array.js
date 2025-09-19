// Snack Array Avanzati

// Hai un array di oggetti rappresentanti libri:

const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];

// Snack 1 - Filtra e Modifica
// Crea una funzione che somma due numeri.
// Crea un array (longBooks) con i libri che hanno più di 300 pagine;

// const longBooks = books.filter((book) => book.pages > 300);
// console.log("Ecco i libri con più di 300 pagine:", longBooks);

// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
// Stampa in console ogni titolo nella console.

// const longBooksTitles = longBooks.forEach((book) =>
//   console.log("I titoli sono:", book.title)
// );

// Snack 2 - Il primo libro scontato

// Creare un array (availableBooks) che contiene tutti i libri disponibili.

// const availableBooks = books.filter((book) => book.available);
// console.log("Libri disponibili:", availableBooks);

// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)

// const discountedBooks = availableBooks.map((book) => {
//   const bookPrice = book.price.replace(`€`, ``);
//   console.log(bookPrice);
//   const price = parseFloat(bookPrice);
//   console.log(price);
//   const discount = price * 0.8;
//   console.log(discount);
//   const newPrice = discount.toFixed(2);
//   console.log(newPrice);
//   const newPriceBook = newPrice + `€`;
//   console.log(newPriceBook);
//   book.price = newPriceBook;
//   console.log(book.price);
//   console.log(book);
//   return book;
// });

// console.log("Libri scontati:", discountedBooks);

// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

// const fullPricedBook = discountedBooks.find(
//   (book) => parseFloat(book.price.replace(`€`, ``)) % 1 === 0
// );

// console.log("Primo libro con prezzo intero:", fullPricedBook);

// Snack 3 - Ordinare gli Autori

// Creare un array (authors) che contiene gli autori dei libri.

// const authors = books.map((book) => book.author);
// console.log("Tutti gli autori sono:", authors);

// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.

// const areAuthorsAdults = authors.every((author) => author.age > 18);
// console.log("Tutti gli autori sono maggioreni?Risposta:", areAuthorsAdults);
// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

// authors.sort((a, b) => {
//   if (areAuthorsAdults === false) {
//     return a.age - b.age;
//   } else {
//     return b.age - a.age;
//   }
// });
// console.log("Ordine crescente autori:", authors);

// Snack 4 - Calcola l’età media

// Creare un array (ages) che contiene le età degli autori dei libri.

// const ages = books.map((book) => book.author.age);
// console.log("Somma delle età degli autori:", ages);

// Calcola la somma delle età (agesSum) usando reduce.

// const ageSum = ages.reduce((acc, current) => acc + current, 0);
// console.log("Somma delle età degli autori:", ageSum);

// Stampa in console l’età media degli autori dei libri.

// const middleAge = ageSum / ages.length;
// console.log("Età media degli autori è:", middleAge);

// Snack 5 (Bonus) - Raccogli i libri

// Usando la l'API http://localhost:3333/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
// Testala con l’array [2, 13, 7, 21, 19] .
