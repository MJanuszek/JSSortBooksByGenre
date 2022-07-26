
const buttons = document.querySelectorAll(".genre");
const displayBooksDiv = document.querySelector(".display-books");

const allBooks = [
    {
        name: " The Man Who Died Twice",
        genre: "crime"
    },
    {
        name: " The Thursday Murder Club",
        genre: "crime"
    },
    {
        name: " Love on the Brain",
        genre: "romance"
    },
    {
        name: " Fake It Till You Bake It",
        genre: "romance"
    }
];
const romanceBooks = [];
const crimeBooks = [];
const horrorBooks = [];
const adventureBooks = [];
const fantasyBooks = [];
// extracting genre from array of objects:
const extractGenre = (array) => {
    for (let i =0; i <array.length; i++ ){
        if (array[i].genre === "romance") {
            romanceBooks.push(array[i].name)
        } else if (array[i].genre === "crime") {
            crimeBooks.push(array[i].name)
        }
    }
    //  end of extractGenre()
};

const displayBooks = (e) => {
    console.log(e.srcElement.className);
        // 1
    if (e.srcElement.className.includes("crime")) {
        displayBooksDiv.textContent = crimeBooks;
        if ( crimeBooks.length === 0){
            displayBooksDiv.textContent = `Selected ${e.srcElement.className} doesn't exist`;
        }
        // 2
    } else if (e.srcElement.className.includes("romance")) {
        displayBooksDiv.textContent = romanceBooks;
        if ( romanceBooks.length === 0){
            displayBooksDiv.textContent = `Selected ${e.srcElement.className} doesn't exist`;
        }
        // 3
    } else if (e.srcElement.className.includes("horror")) {
        displayBooksDiv.textContent = horrorBooks;
        if ( horrorBooks.length === 0){
            displayBooksDiv.textContent = `Selected ${e.srcElement.className} doesn't exist`;
        }
        // 4
    } else if (e.srcElement.className.includes("adventure")) {
        displayBooksDiv.textContent = adventureBooks;
        if ( adventureBooks.length === 0){
            displayBooksDiv.textContent = `Selected ${e.srcElement.className} doesn't exist`;
        }
        // 5
    } else if (e.srcElement.className.includes("fantasy")) {
        displayBooksDiv.textContent = fantasyBooks;
        if ( fantasyBooks.length === 0){
            displayBooksDiv.textContent = `Selected ${e.srcElement.className} doesn't exist`;
        }
        
    }

    // end displayBooks()
}
extractGenre(allBooks);
buttons.forEach(button => button.addEventListener("click", displayBooks));

// Adding new book:::::::::::::::::::::::::::::::::::::::::::::::::::::::::

let title = "";
let genre = "";

const addButton = document.querySelector(".add-new");
const titleInput = document.querySelector(".title");
const genreInput = document.querySelector(".book-genre");
const newAdditionDisplay = document.querySelector(".new-addition")


const addNewBook = (e) => {
    title = titleInput.value;
    genre = genreInput.value
    allBooks.push({name:title, genre:genre})
    console.log(allBooks);
    // display content of last index of array allBooks::
    newAdditionDisplay.textContent = `New book added: Title "${allBooks[allBooks.length-1].name}" Genre: ${allBooks[allBooks.length-1].genre} `;

    // end addNewBook()
}

addButton.addEventListener("click", addNewBook);

// Display all books from collection:

const showAllButton = document.querySelector(".show-all");
const displayAllBooksDiv = document.querySelector(".collection");
let allTitles = [];

const showBooksCollection = function() {
    
    for (let i = 0; i<allBooks.length; i++){
          
        displayAllBooksDiv.textContent += `${allBooks[i].name}`; 
     
    }
   
}

showAllButton.addEventListener("click", showBooksCollection)
