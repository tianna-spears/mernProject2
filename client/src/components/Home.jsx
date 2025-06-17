import React, { useState, useEffect } from "react";
import Create from "../components/Create";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

   const handleAdd = (newTodo) => {
    setTodos(prev => [...prev, newTodo]);
  };

  const handleEdit = (id) => {
    axios
      .put(`http://localhost:5000/update/${id}`, { done: true })
   .then((result) => {
      setTodos(prevTodos =>
        prevTodos.map(todo => (todo._id === id ? result.data : todo))
      );
    })
    .catch(err => console.log(err));
};

const handleDelete = (id) => {
  axios.delete(`http://localhost:5000/delete/${id}`)
    .then(() => {
      setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
    })
    .catch(err => console.log(err));
};

  return (
    <div className="home">
      <h2> To Do App </h2>
      <Create onAdd= {handleAdd}/>
      {todos.length === 0 ? (
        <div>
          <h2> No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="task" key={todo._id}>
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? (
                <BsFillCheckCircleFill className="icon">
                  {" "}
                </BsFillCheckCircleFill>
              ) : (
                <BsCircleFill className="icon" />
              )}
              <p className={todo.done ? "line_through" : ""}> {todo.task}</p>
            </div>

            <div>
              <span>
                <BsFillTrashFill
                  className="icon"
                  onClick={() => handleDelete(todo._id)}
                />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
