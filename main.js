const form = document.getElementById("todo-form");
const noteText = document.getElementById("note-text");
const notesContainer = document.getElementById("notes");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = noteText.value.trim();
  if (text !== "") {
    createNoteElement(text);
    noteText.value = "";
  }
});

function createNoteElement(text) {
  const note = document.createElement("div");
  note.classList.add("note");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      note.classList.add("completed");
      deleteButton.style.display = "inline-block";
    } else {
      note.classList.remove("completed");
      deleteButton.style.display = "none";
    }
  });
  const noteText = document.createElement("span");
  noteText.textContent = text;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", function () {
    note.remove();
  });

  note.appendChild(checkbox);
  note.appendChild(noteText);
  note.appendChild(deleteButton);
  notesContainer.appendChild(note);
}

function checkForNoNotes() {
  const noNotesMessage = document.getElementById("no-notes-message");
  if (notesContainer.children.length === 0) {
    if (noNotesMessage) {
      noNotesMessage.style.display = "block";
    } else {
      const message = document.createElement("p");
      message.textContent = "No ToDo items.";
      message.id = "no-notes-message";
      document.body.insertBefore(message, notesContainer);
    }
  } else {
    if (noNotesMessage) {
      noNotesMessage.style.display = "none";
    }
  }
}
