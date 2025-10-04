let container = document.querySelector("div.container");

function createDiv(number){
    let newContainer = document.createElement("div");
    newContainer.classList.add("row");
    for(k = 0; k < number; k++){
        let newDiv = document.createElement("div");
        newDiv.addEventListener("mouseenter",changeColor);
        newContainer.append(newDiv);
    }
    container.append(newContainer);
}

function changeColor(){
    this.classList.add("hover");
}

function multipleDivs(rows = 1,columns = 1){
    for(i = 0; i < rows; i++){
        createDiv(columns);
    }
}

multipleDivs(16,16);

function newGrid(){
    let size = prompt("Please Enter a New Grid Size","16");
    if(size !== null && size > 0 && size <= 100){
        container.innerHTML = '';
        multipleDivs(size,size);
    }
}

let button = document.querySelector("button");
button.addEventListener("click",newGrid);

