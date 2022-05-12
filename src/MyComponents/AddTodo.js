import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title , setTitle] = useState("");
    const [desc , setDesc] = useState("");
   const submit = (e)=>{
    e.preventDefault();//page will not reload
    if(!title || !desc){
        alert('title or description can not be empty');
    }
    else
    props.addTodo(title,desc);
    setTitle("");
    setDesc("");
    }
  return (
    <div className='container my-3'><form onSubmit={submit}>
        <h3 className='text-center'>Add a Todo</h3>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Todo Title</label>
      <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
     
    </div>
    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Todo Description</label>
      <input type="text" className="form-control" onChange={(e)=>setDesc(e.target.value)} value={desc} id="desc"/>
    </div>
    
    <button type="submit" className="btn btn-sm btn-success">Add</button>
  </form></div>
  )
}
