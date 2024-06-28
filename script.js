function makeUpperCase(){
    const inputbox = document.getElementById("input");
const answer = document.getElementById("result");
    answer.innerText = inputbox.value.toUpperCase();
}
function makeLowerCase(){
    const inputbox = document.getElementById("input");
const answer = document.getElementById("result");
    answer.innerText = inputbox.value.toLowerCase();
}
function makeCharctercount(){
    const inputbox = document.getElementById("input");
const answer = document.getElementById("result");
    answer.innerText = Character Count:${inputbox.value.length};

}
function makeWordcount(){
    const inputbox = document.getElementById("input");
const answer = document.getElementById("result");
    answer.innerText = Word Count:${inputbox.value.split(" ").length};
}