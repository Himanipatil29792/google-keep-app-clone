import React from "react";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>

        <p>{props.content}</p>
        <button type="button" className="btn" onClick={deleteNote}>
          <p className="deleteIcon">➖</p>
        </button>
      </div>
    </>
  );
};
export default Note;
