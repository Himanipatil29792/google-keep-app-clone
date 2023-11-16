import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("I am Clicked");

    setAddItem((prevData) => {
      return [...prevData, note];
    });

    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem(
      addItem.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {/* {JSON.stringify(addItem, null, 4)} */}
      {addItem
        ? addItem.map((val, index) => (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          ))
        : ""}
      <Footer />
    </>
  );
}

export default App;
