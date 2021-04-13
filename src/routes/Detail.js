import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Задача создана в: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownParams) {
  const {
    match: {
      params: { id },
    },
  } = ownParams;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
