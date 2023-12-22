let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;


function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let outputStr =  " " + count + " - ";
    saveEl.innerText += outputStr;
    countEl.innerText = 0;
    count = 0;
}

