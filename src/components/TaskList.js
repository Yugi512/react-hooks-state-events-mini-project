import React, { useState } from "react";
import Task from "./Task";

function TaskList({task, buttonDelete}) {

  return (
    <div className="tasks">
      {task.map((element, index) =>
        <Task key={index} index={index} text={element.text} category={element.category} buttonDelete={buttonDelete} />)}
    </div>
  );
}

export default TaskList;
