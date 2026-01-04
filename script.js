const displayNotes = document.querySelector(".notes-container");
const createBtn = document.getElementById("create-btn");
const inputBox = document.querySelectorAll(".input-box");

function showNotes() {
  displayNotes.innerHTML = localStorage.getItem("notes");
}
showNotes();

function saveNotes() {
  localStorage.setItem("notes", displayNotes.innerHTML);
}

createBtn.addEventListener("click", () => {
  const inputBox = document.createElement("p");

  const img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "image/icons8-delete-100.png";

  displayNotes.appendChild(inputBox).appendChild(img);

  saveNotes();
});

displayNotes.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveNotes();
  } else if (e.target.tagName === "P") {

    const notes = document.querySelectorAll(".input-box");

    notes.forEach((nt) => {
      nt.onkeyup = function () {
        saveNotes();
      };
    });
  }
});
