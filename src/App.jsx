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
  const [newPhone,setNewPhone] = useState('')

  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then(response=>{
        setNotes(response.data)
      })
  },[])

  const handleShowAll = () => setShowAll(!showAll)

  const handleChangesOnNewValue = (event) => setNewNote(event.target.value)

  const handleChangeOnPhone = (event)=> setNewPhone(event.target.value)

  const handleAddingNewPhones = (event) => {
    event.preventDefault()
    const exists = notes.find(data=>data.name===newNote)?
    alert('Name already exists within the list') : setNotes(notes.concat({'name':newNote,'id':notes.length+1,'number':newPhone}))
    setNewNote('')
    setNewPhone('')
  }

  return(
    <div>
      <Titles title='Persons'/>
      <Note persons={notes}/>
      <Titles title='Add new person:' h={2}/>
      <Form
        labels={
          ['Name','PhoneNumber']
        }
        inputs={[{
          placeholder : 'Add a name',
          value : newNote,
          onChange: handleChangesOnNewValue
        },
        {
          placeholder : 'Add a number',
          value : newPhone,
          onChange: handleChangeOnPhone
        }]}
        onClick= {handleAddingNewPhones}
      />

    </div>
  )
}

export default App