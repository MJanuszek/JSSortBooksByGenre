
const buttons = document.querySelectorAll(".genre");
const displayBooksDiv = document.querySelector(".display-books");


const allBooks = [
    {
        name: "The Man Who Died Twice",
        genre: "crime"
    },
    {
        name: "The Thursday Murder Club",
        genre: "crime"
    },
    {
        name: "Love on the Brain",
        genre: "romance"
    },
    {
        name: "Fake It Till You Bake It",
        genre: "romance"
    }
];

// extracting "romance" genre from array of objects:
const romanceBooks = [];
const extractGenre = (array) => {
    for (let i =0; i <array.length; i++ ){
        if (array[i].genre === "romance") {
            romanceBooks.push(array[i].name)
        }
    }

}

extractGenre(allBooks)


const displayBooks = (e) => {
    console.log(e.srcElement);
    
    if (e.srcElement.className === "crime") {
        displayBooksDiv.textContent = "ok";
    } else if (e.srcElement.className === "romance") {
        extractGenre(allBooks)
        displayBooksDiv.textContent = romanceBooks;
    }
 








    // end displayBooks()
}

buttons.forEach(button => button.addEventListener("click", displayBooks));