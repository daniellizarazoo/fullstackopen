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

  const handleNewNote = () => setNotes(notes.concat({'content':newNote,'id':notes.length+1,'important':Math.random()<0.5}))

  return(
    <div>
      <Titles title='Notas'/>
      <Button 
        text={showAll?'Show importants':'Show all'}
        onClick={handleShowAll}
      />
      {showAll
        ? <Note notes={notes}/>
        :<Note notes={notes.filter(note=>note.important==true)}/>
      }
      <Titles title='Add new note:' h={2}/>
      <Input 
        placeholder='Add new note' 
        value={newNote} 
        onChange={handleChangesOnNewValue}
      />
      <Button
        text='Add'
        onClick={handleNewNote}
      />
      <Form num_labels={2}
        l1={['text holder', handleNewNote]}
      />

    </div>
  )
}

export default App