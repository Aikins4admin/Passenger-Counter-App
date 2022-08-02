// let count = 0;
// document.getElementById('increment-btn') = onclick('increment()');

// function imcrement() {
//     count += 1;
// }

// document.getElementById('count-el').innerHTML = increment();

// ===========================================================================

// document.getElementById("count").innerText = 5;

let count = 0;
let countEl = document.getElementById('count-el');

function increment() {
    count += 1; 
    countEl.innerText = count;
}

let saveEl = document.getElementById('save-el');

function save() {
    let saveEntries = count + " - ";
    saveEl.innerText += saveEntries;

    // saveEl.innerText = "Previous Entries " + saveEntries;
    // saveEl.textContent += saveEntries;
    
    count = 0;
    countEl.innerText = 0;
}
