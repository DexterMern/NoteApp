const $ = document;
const inputElem = document.getElementById("NoteApp-input");
const btnSaveElem = $.querySelector(".fa-plus-square-o");
const btnDeleteElem = $.querySelector(".fa-eraser");
const colorBox = $.querySelectorAll(".circle");
const notesContainer = $.querySelector(".note-box");

$.body.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    generateNewNote();
  }
});

colorBox.forEach(function (colorBox) {
  colorBox.addEventListener("click", function (event) {
    let mainColor = event.target.style.backgroundColor;
    inputElem.style.backgroundColor = mainColor;
    console.log(mainColor);
  });
});

function generateNewNote() {
  if (inputElem.value.length != 0) {
    let div = $.createElement("div");
    div.className = "box";
    div.innerHTML = inputElem.value;
    div.style.backgroundColor = inputElem.style.backgroundColor;
    notesContainer.appendChild(div);
    inputElem.value = "";
    console.log(notesContainer);
  }
}

btnDeleteElem.addEventListener("click", function () {
  inputElem.value = "";
  inputElem.style.backgroundColor = "#fff";
});
