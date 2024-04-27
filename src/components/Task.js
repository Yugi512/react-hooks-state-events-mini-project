import React, { useState } from "react";

function Task({ index ,text, category , buttonDelete }) {

  return (
    <div className="task">
      <div  className="label" name="category" value={category}>{category}</div>
      <div  className="text" name="task" value={text}>{text}</div>
      <button className="delete" onClick={(e) => buttonDelete(index)}>X</button>
    </div>
  );
}

export default Task;
