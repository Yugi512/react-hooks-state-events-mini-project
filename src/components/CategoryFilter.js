import React from "react";

function CategoryFilter({catArr,clickSelected, categoryState}){

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catArr.map((category) => 
      <button key={category} value={category} className={categoryState === category ? "selected" : ""} onClick={(event) => clickSelected(event)}>{category}</button>
    )}
    </div>
  );
}

export default CategoryFilter;
