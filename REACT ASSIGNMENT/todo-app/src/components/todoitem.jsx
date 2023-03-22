import React from 'react'

const Todoitem = (props) => {
  return (
    <div>
      <input type="checkbox" onChange={()=>props.completed(props.id)} />
      <p>{props.item}</p>
    </div>
    
  )
}

export default Todoitem