import React, { useState, useEffect } from "react";
import Create from '../components/Create'
import axios from "axios";
import { BsCircleFill, BsFillTrashFill } from "react-icons/bs";


const Home = () => {
    const [ todos, setTodos ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleEdit = () => {
        
    }

    return (
        <div className="home">
            <h2> To Do App </h2>
            <Create />
            {
                todos.length === 0 ?
                    <div> <h2> No Record</h2> </div>
                    :
                todos.map(todo => (
                    <div className='task' key={todo._id}> 
                        <div className='checkbox' onClick={handleEdit}> 
                            <BsCircleFill className='icon'/>
                    <p> {todo.task} </p>
                     </div>
                     <div>
                        <span> <BsFillTrashFill className='icon' /> </span>
                     </div>
                     </div>
                ))
            }
        </div>
    )
}

export default Home;