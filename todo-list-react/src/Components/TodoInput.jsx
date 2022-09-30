import React from "react";

export default function TodoInput(props) {
  const username = props.username;
  const onAdd = props.onAdd;

  return (
    <>
      <div id="add-todo">
        <form
          id="form-elm"
          onSubmit={(e) => {
            e.preventDefault();
            const $input = document.getElementById("input-text");
            const text = $input.value;
            onAdd(username, text);
            $input.value = "";
            $input.focus();
          }}
        >
          <input type="text" id="input-text" placeholder="새 일정 추가"></input>
          <input type="submit" id="submit-btn" value="추가"></input>
        </form>
      </div>
    </>
  );
}
