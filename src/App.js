
import './App.css';
import Header from "./MyComponents/Header";
import  Footer from "./MyComponents/Footer";
import  {Todos}  from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";
import React, {useEffect, useState} from 'react';
function App() {
  let initTodo;
  if(localStorage.getItem("todos"===null)){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    setTodos(todos.filter((element)=>{
      return element !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log('Deleted of todo ',todo);
  }
  const [todos , setTodos] = useState (initTodo )
  useEffect (()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  const addTodo =  (title , desc) => {
    console.log("i am adding todo" , title , desc);
     let sno;
     if(todos.length === 0){
      sno =  0;
     }
     else {
      sno = todos[todos.length-1].sno+1;
     }
   
    const myTodo = {
      sno : sno,
      title : title,
      desc : desc
    }
    console.log(myTodo);
    setTodos([...todos , myTodo]);
  }
  let myname = 'Sangram'
  return (
<>
    <Header title = "MyTodos List"/>
    <AddTodo addTodo = {addTodo}/>
    <Todos todos = {todos} onDelete = {onDelete} />
    <Footer/>
</>
  );
}

export default App;
