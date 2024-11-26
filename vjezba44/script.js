"use strict";

async function getTodo() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log(res);
    console.log(res.data);
    console.log(res.data.title);
  } catch (error) {
    console.log(error);
  }
}

getTodo();
