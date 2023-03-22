import React from 'react'
import { useState } from 'react'

const Addtodo = (props) => {

  const[item, SetItem] = useState("")

  const handlechange = (e)=>{
     SetItem(e.target.value)
  }
  const handlesubmit = (e)=>{
     e.preventDefault()
     props.item(item)
     
  }

  return (
    <form method='post' onSubmit={handlesubmit}>
        <input type="text" name='item' value={item} onChange ={handlechange} placeholder='Enter a Todo' />
        <button type='submit'>Add</button>
    </form>
  )
}

export default Addtodo