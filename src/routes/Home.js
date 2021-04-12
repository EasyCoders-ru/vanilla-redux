import React, { useState } from "react";
import { connect, useStore } from "react-redux";

function Home({ toDos }) {
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
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function getCurrentState(state) {
  return { toDos: state };
}

export default connect(getCurrentState)(Home);
