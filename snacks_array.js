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

// const longBooksTitles = longBooks.map((book) => book.title);
// console.log("I titoli dei libr sono:", longBooksTitles);

// Stampa in console ogni titolo nella console.

// longBooksTitles.forEach((title) => {
//   console.log(title);
// });

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

//   return { ...book, price: newPriceBook };
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

// const areAuthorsAdults = authors.every((author) => author.age >= 18);
// console.log("Tutti gli autori sono maggioreni?Risposta:", areAuthorsAdults);

// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

// authors.sort((a, b) => {
//   if (areAuthorsAdults === false) {
//     return a.age - b.age;
//   } else {
//     return b.age - a.age;
//   }
// altra soluzione di Hyur: authors.sort((a,b) => (a.age - b.age)*(areAuthorsAdults ? 1 : -1));
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

// const ids = [2, 13, 7, 21, 19];

// async function fetchJson(url) {
//   const response = await fetch(url);
//   const obj = await response.json();
//   return obj;
// }

// async function getBooks(ids) {
//   const responses = ids.map((id) =>
//     fetchJson(`http://localhost:3333/books/${id}`)
//   );
//   const results = await Promise.all(responses);
//   return results;
// }

// (async () => {
//   const results = await getBooks(ids);
//   console.log("Ecco i risultati:", results);
// })();

// Snack 6 (Bonus) - Ordina i libri

// Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.

// const areThereAvailableBooks = books.some((book) => book.available);
// console.log(areThereAvailableBooks);

// Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).

// const booksByPrice = [...books].sort((a, b) => {
//   return (
//     parseFloat(a.price.replace(`€`, ``)) - parseFloat(b.price.replace(`€`, ``))
//   );
// });
// console.log("Prezzi libri ordinati in ordine crescente:", booksByPrice);

// Ordina l’array booksByPrice in base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.

// booksByPrice.sort((a, b) =>
//   a.available === b.available ? 0 : a.available ? -1 : 1
// );
// console.log(booksByPrice);

// Snack 7 (Bonus) - Analizza i tag

// Usa reduce per creare un oggetto (tagCounts) che conta quante volte ogni tag viene usato tra i libri.

const tagCounts = books.reduce((acc, book) => {
  book.tags.forEach((element) => {
    acc[element] = (acc[element] || 0) + 1;
  });

  return acc;
}, {});

console.log(tagCounts);

// SOLUZIONE DI HYUR:

//const tagCounts = books.reduce((acc, b)=>{
// b.tags.forEach(tag =>{
// if(acc[tag]){
// acc[tag]++
//}else{
// acc[tag]= 1
//}
// });
// return acc;
// },{})
