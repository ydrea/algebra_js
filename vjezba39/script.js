"use strict";

const apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const getTodos = () => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => newTodo(todo));
    });
};

// Funkcija koja kreira novi zadatak i njegov izgled
const newTodo = (todo) => {
  const div = document.createElement("div");
  div.className = "todo";
  // Kreiranje novog textnodea od našeg title sadržaja iz API-a i ubacivanje title sadržaja u div element
  div.appendChild(document.createTextNode(todo.title));
  // Kreiranje novog data-id atributa i za njegovu vrijednost postavljanje id-a iz API-a
  div.setAttribute("data-id", todo.id);

  let trashIcon = document.createElement("i");
  trashIcon.className = "fa-solid fa-trash";
  div.appendChild(trashIcon);

  // definiranje event listenera za brisanje zadatka
  trashIcon.addEventListener("click", deleteTodo);

  document.getElementById("todo-list").appendChild(div);

  // Provjera ako todo ima completed atribut, da mu dodamo klasu gotov...
  if (todo.completed) {
    div.classList.add("gotov");
  }
};

const createTodo = (e) => {
  e.preventDefault();
  //firstElementChild će zapisati prvi element unutar forme u varijablu input
  const input = e.target.firstElementChild;
  const inputValue = input.value.trim();

  // Provjera da li je input polje prazno
  if (inputValue === "") {
    alert("Molimo unesite novi zadatak");
    return;
  }

  const newTodoItem = {
    title: inputValue,
    completed: false,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodoItem),
  })
    .then((res) => res.json())
    .then((data) => {
      newTodo(data);
      input.value = "";
    });
};

const deleteTodo = (e) => {
  if (e.target.classList.contains("fa-trash")) {
    // pomoću dataseta ćemo spremiti id elementa kojeg smo kliknuli u id varijablu
    const id = e.target.dataset.id;
    // fetch putanja će nam sadržavati apiUrl i naravno id elementa kojeg brišemo
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        // closest metodom ćemo spremiti u todoDiv varijablu najbliži element sa klasom todo (pričamo o trash ikoni)
        const todoDiv = e.target.closest(".todo");
        todoDiv.remove();
      });
  }
};

const toggleCompleted = (e) => {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("gotov");

    updateTodo(e.target.dataset.id, e.target.classList.contains("gotov"));
  }
};

const updateTodo = (id, completed) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });
};

document.addEventListener("DOMContentLoaded", getTodos);
document.getElementById("todo-list").addEventListener("click", toggleCompleted);
document.getElementById("todo-form").addEventListener("submit", createTodo);
