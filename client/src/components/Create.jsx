import React, { useState } from "react";
import axios from "axios";

const Create = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    axios.post('http://localhost:5000/add', {task})
 .then((result) => {
      onAdd(result.data);
      setTask(''); 
    })
    .catch(err => console.log(err));
};

  return (
    <div className="create_form">
      <input type="text" placeholder="Type Todo Here" onChange={(e) => setTask(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Add </button>
    </div>
  );
};

export default Create;
