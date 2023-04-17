import React, { useState, useEffect } from 'react'
import DisplayNotes from './DisplayNotes'
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore';
import { db } from '../firebase-config';

const Note = () => {

 const[notes, setNotes] = useState([])
 const[addNote, setAddNote] = useState({title:"", content:""})
 const[id, setId]= useState("")

 const noteRef = collection(db, "note")

 useEffect(()=>{
    const getNotes = async ()=>{
        const data = await getDocs(noteRef);
        
        setNotes(data.docs.map((docs)=>({...docs.data(), id: docs.id})))
    }
    getNotes()
 },[noteRef])

 const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setAddNote({...addNote, [name]: value})
}

 const handleSubmit = async (e) =>{
    e.preventDefault();
    await addDoc(noteRef, addNote)
    setAddNote({title: "", content:""})
}

const deleteNote = async (id)=>{
    const deletenote = doc(noteRef, id)
    await deleteDoc(deletenote)
}

const updateNote = async (note)=>{
    setAddNote({title: note.title, content: note.content})
    setId(note.id)
}

const updatedNote = async (id)=>{
    const updatenote = doc(db, "note", id)
    await updateDoc(updatenote, addNote)
    setAddNote({title: "", content:""})
}

  return (
    <div className="container">
        
        <form method='post' onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='Enter Title...' onChange={handleChange} value={addNote.title}/>
            <textarea name="content" placeholder='Type Something' rows="4" onChange={handleChange} value={addNote.content}></textarea>
            <div style={{display: "flex"}}>
                <button  style={{margin: "20px 0 5px 10px"}} type='submit'>Add Note</button>
                <button  style={{margin: "20px 0 5px 10px"}} type='button' onClick={()=>updatedNote(id)}>Update</button>
            </div>
            
        </form>

        <div className='note-container'>
            {notes && notes.map((el)=>(
                <DisplayNotes title={el.title} content={el.content} id={el.id} getId={deleteNote} getUpdateNoteId={updateNote}/>
            ))} 
        </div>
    </div>
  )
}

export default Note
