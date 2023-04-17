import React from 'react'

const DisplayNotes = (props) => {
    
    const handleClick = (id)=>{
        props.getId(id)
    }

    const handleUpdate = (note)=>{
        props.getUpdateNoteId(note)
    }

  return (
    <div className="note" key={props.id}>
        <p className="title">{props.title}</p>
        <p className="content">{props.content}</p>
        <button onClick={()=>handleClick(props.id)}>Delete</button>
        <button style={{marginLeft: "20px"}} onClick={()=>handleUpdate({title: props.title,  content: props.content , id: props.id})}>Update</button>
     </div>
  )
}

export default DisplayNotes
