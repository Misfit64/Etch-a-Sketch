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
    if(rainbow.classList[1] == 'single'){
        this.style.backgroundColor = 'pink';
    }
    else if(rainbow.classList[1] == 'rainbow'){
        const red =  Math.floor(Math.random() * 256);
        const green =  Math.floor(Math.random() * 256);
        const blue =  Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }

}

function multipleDivs(rows = 1,columns = 1){
    for(i = 0; i < rows; i++){
        createDiv(columns);
    }
}

multipleDivs(16,16);

function newGrid(){
    let size = prompt("Please Enter a New Grid Size (1-100)","16");
    if(size !== null && size > 0 && size <= 100){
        container.innerHTML = '';
        multipleDivs(size,size);
    }
}

let button = document.querySelector("button.grid-size");
button.addEventListener("click",newGrid);

function changeRainbow(){
    if (this.textContent == "Rainbow") {
        this.textContent = "Single Color";
        this.classList.add("rainbow");
        this.classList.remove("single");
    }else{
        this.textContent = "Rainbow";
        this.classList.remove("rainbow");
        this.classList.add("single");
    }
}


let rainbow = document.querySelector("button.color");
rainbow.addEventListener("click",changeRainbow);
