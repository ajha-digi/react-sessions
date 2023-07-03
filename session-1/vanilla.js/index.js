const incButton = document.getElementById("increment");
const count = document.getElementById("count");
const decButton = document.getElementById("decrement");

let state = 0;
// count.innerText = state;

incButton.addEventListener("click", ()=>{
    count.innerText = ++state
})

decButton.addEventListener("click", ()=>{
    count.innerText = --state
})
