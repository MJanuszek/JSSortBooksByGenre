
const buttons = document.querySelectorAll(".genre");


const displayBooks = (e) => {
    console.log(e.srcElement);
    
   let elementClassName = document.getElementsByClassName("button");
    
    if (elementClassName === "crime") {
        console.log("ok");
    }



    // end displayBooks()
}

buttons.forEach(button => button.addEventListener("click", displayBooks));