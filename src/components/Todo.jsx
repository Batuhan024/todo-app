import React, { useState } from 'react'
import { IoIosRemoveCircle } from 'react-icons/io'
import { FaEdit } from 'react-icons/fa'
import '../App.css'
import { FaCheck } from 'react-icons/fa'

function Todo({todo, onRemoveTodo, onUpdatedTodo}) {
  const[editTable,setEditTable] = useState(false);
  const{id,content} = todo;
  const[newTodo,setNewTodo] = useState(content);
  const removeTodo = () => {
    onRemoveTodo(id);
  }
  const updateTodo = () =>{
    const request = {
      id: id,
      content: newTodo
    }
    onUpdatedTodo(request);
    setEditTable(false);

  }


  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',border:'1px solid lightgrey', padding:'10px', marginTop:'10px'}}>
        <div>
            {
              editTable ? <input  style={{width:'380px'}} value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} className='todo-input' type='text'/> : content
            }
        </div>
        <div>
            <IoIosRemoveCircle className='todo-icons' onClick={removeTodo}/>
            {
              editTable ?  <FaCheck className='todo-icons' onClick={updateTodo} />  :  
              <FaEdit className='todo-icons' onClick={()=> setEditTable(true)}/>
            }
        </div>
    </div>
  )
}

export default Todo