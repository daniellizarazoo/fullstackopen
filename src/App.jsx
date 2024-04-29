import { useState, useEffect } from "react"
import Note from './components/Note'
import Titles from "./components/Titles"
import Button from "./components/Buttons"
import Input from './components/Input'
import Form from "./components/Form"
import axios from 'axios'

const App = () => {
  const [notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState('')
  const [showAll,setShowAll] = useState(true)

  useEffect(()=>{
    axios
      .get('http://localhost:3001/notes')
      .then(response=>{
        setNotes(response.data)
      })
  },[])

  const handleShowAll = () => setShowAll(!showAll)

  const handleChangesOnNewValue = (event) => setNewNote(event.target.value)

  const handleNewNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: notes.length+1,
      content: newNote,
      important: Math.random() < 0.5
    }

    axios
      .post('http://localhost:3001/notes',noteObject)
      .then(response =>{
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
  }

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find(n=>n.id==id)
    const changedNote = {...note, important: !note.important}
    
    axios.put(url, changedNote).then(response =>{
      setNotes(notes.map(n=> n.id !== id? n:response.data))
    })
  }

  return(
    <div>
      <Titles title='Notas'/>
      <Button 
        text={showAll?'Show importants':'Show all'}
        onClick={handleShowAll}
      />
      {showAll
        ? <Note notes={notes} toggleImportance={toggleImportanceOf}/>
        :<Note notes={notes.filter(note=>note.important==true)} toggleImportance={toggleImportanceOf}/>
      }
      <Titles title='Add new note:' h={2}/>
      <form onSubmit={handleNewNote}>
        <Input 
          placeholder='Add new note' 
          value={newNote} 
          onChange={handleChangesOnNewValue}
        />
        <button type="submit">Add</button>
      </form>
      
    </div>
  )
}

export default App