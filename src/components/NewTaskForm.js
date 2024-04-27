import React,{ useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit,}) {
  const [selectedState, setSelectedState] = useState("Code")
  const [inputText, setInputTextState] = useState("")

  function handleSubmit(event){
    event.preventDefault()
    const items = { 
      category: selectedState,
      text: inputText,
    }
    return onTaskFormSubmit(items)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(event) => {
          setInputTextState(event.target.value)
        }} />
      </label>
      <label>
        Category
        <select name="category" value={selectedState} onChange={(event) => {
          setSelectedState(event.target.value)
        }}>
          {categories.map((category) => 
            <option key={category} name={category} value={category}>{category}</option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
