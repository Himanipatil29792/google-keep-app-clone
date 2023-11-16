import React, { useState } from "react";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    // const value=event.target.value;
    // const content=event.target.content;

    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };

      // console.log(note);
    });
  };

  const addEvent = () => {
    // event.preventDefault();
    props.passNote(note);

    setNote({
      title: "",
      content: "",
    });
  };

  console.log(note);

  const expandIt = () => {
    setExpand(true);
  };

  const backToNormal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="col-md-4 offset-md-4">
        <div className="main_note" onDoubleClick={backToNormal}>
          <form>
            {expand ? (
              <input
                type="text"
                name="title"
                value={note.title}
                onChange={inputEvent}
                autoComplete="off"
                placeholder="Title"
              />
            ) : null}

            <textarea
              rows=""
              name="content"
              value={note.content}
              onChange={inputEvent}
              column=""
              placeholder="Write a Note..."
              onClick={expandIt}
            />

            {expand ? (
              <button
                type="button"
                onClick={addEvent}
                className="MuiButton-root"
              >
                <p className="plus-sign">➕</p>
              </button>
            ) : null}
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
