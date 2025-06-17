import React, { useState } from "react";
import Create from '../components/Create'


const Home = () => {
    const [ todos, setTodos ] = useState([])
    return (
        <div className="home">
            <h2> To Do App </h2>
            <Create />
            {
                todos.length === 0 ?
                    <div> <h2> No Record</h2> </div>
                    :
                todos.map(todo => (
                    <div> {todo} </div>
                ))
            }
        </div>
    )
}

export default Home;