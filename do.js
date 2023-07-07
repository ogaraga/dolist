let listcontent = document.getElementById("listcontent");
let btn = document.getElementById("btn");
let text = document.getElementById("textbox");
const date = document.getElementById("date");
let input = document.getElementById("when");
let addWhen = document.getElementById("addbtn");
let clicks = document.getElementById("clickme");
let dolist = document.querySelector(".dolist");

clicks.addEventListener("click", () => {
    dolist.classList.toggle('active');

})
// adding date to the do-list
addWhen.addEventListener(("click"), () => {
    let myInput = input.value;
    let txt = /([0-9]{2}):([0-9]{2}):([0-9]{2})/;
    let txt2 = txt.test(myInput);
    if (txt2 && myInput.length === 8) {
        date.innerHTML = myInput;
        input.value = "";

        saveData();
    }

    else {
        alert("Stick to the date-format");
        input.value = "";
    }

})

//creating li and delete buttons.

btn.addEventListener("click", () => {
    let items = document.createElement("li");
    listcontent.appendChild(items).innerHTML = text.value;
    text.value = "";
    let remove = document.createElement("label");
    items.appendChild(remove).innerHTML = "X";

    saveData();
})
listcontent.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "LABEL") {
        e.target.parentElement.remove();
    }
    else {
        return false;
    }
    saveData();
})
function saveData() {
    let tasks = listcontent.innerHTML;
    localStorage.setItem('data', tasks);
}
function getData() {
    listcontent.innerHTML = localStorage.getItem('data');
}
getData();


