import Todoitem from "./components/todoitem";
import './App.css';
import Addtodo from "./components/addtodo";
import { useState } from "react";

function App() {
const [todo, setTodo] = useState([])



  const getItem =(item)=>{
    setTodo((prevState)=>{
          return [...prevState, item]
    })

  }

  const getCompleted =(id)=>{
    setTodo((prevState)=>{
      return prevState.filter((item, index)=>{
        return index!== id;
      })
    })
  }

  return (
    <div>
      <Addtodo item = {getItem}/>
      {todo && todo.map((todo, index)=>{
          <Todoitem id={index} item={todo} completed = {getCompleted}/>
      })}
      
    </div>
  );
}

export default App;
