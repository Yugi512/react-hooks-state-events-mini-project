import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskArray, setTaskArray] = useState(TASKS)
  const [categoriesArray, setCategoryArray] = useState(CATEGORIES)
  const [categoryState, setCategoryState] = useState("All")

  
  function clickSelected(event){
    setCategoryState(event.target.value)
  }
  
  const categoryFilter = taskArray.filter((cat) => {
    if(categoryState === "All"){
       return true;
      } else if(cat.category === categoryState){
      return cat
     } 
  })
  const catArr = categoriesArray.filter((category) => {
    if(category === categoryState){
      return category
    } else {
      return category
    }
  })
  function onTaskFormSubmit(items){
    setTaskArray([...taskArray, items])
  }

  const notAllCategory = categoriesArray.filter((categor) => {
    if(categor !== "All"){
      return categor
    }
  })

  function buttonDelete(index){
    const filteredtask = taskArray.filter((element, filterIndex) => {
      if(filterIndex !== index){
        return element
      }
    })
    setTaskArray(filteredtask)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter catArr={catArr} clickSelected={clickSelected} categoryState={categoryState}  />
      <NewTaskForm categories={notAllCategory} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList task={categoryFilter} buttonDelete={buttonDelete} />
    </div>
  );
}

export default App;
