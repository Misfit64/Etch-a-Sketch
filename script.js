let container = document.querySelector("div.container");
function createDiv(number){
    let newContainer = document.createElement("div");
    newContainer.classList.add("row");
    for(k = 0; k < number; k++){
        let newDiv = document.createElement("div");
        // newDiv.textContent ="test";
        newContainer.append(newDiv);
    }
    container.append(newContainer);
}
function multipleDivs(rows = 1,columns = 1){
    for(i = 0; i < rows; i++){
        createDiv(columns);
    }
}
multipleDivs(16,16);