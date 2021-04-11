import React, { useState } from "react";
import { useStore } from "react-redux";

function Home() {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
    console.log(text);
  };

  return (
    <>
      <h1>Список задач</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={text} />
        <button>Добавить задачу</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
