import React from "react";
import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios.post('http://localhost:5000/add', {task: task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div className="create_form">
      <input type="text" placeholder="Type Todo Here" onChange={() => setTask(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Add </button>
    </div>
  );
};

export default Create;
