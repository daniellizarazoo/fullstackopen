import { useState, useEffect } from "react"
import Note from './components/Note'
import Titles from "./components/Titles"
import Form from "./components/Form"
import Notification from "./components/Notifications"
import phonebook from "./services/phonebook"

const App = () => {
  const [notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState('')
  const [newPhone,setNewPhone] = useState('')
  const [notification,setNotification]= useState(null)

  useEffect(()=>{
  phonebook
    .getAll()
    .then(r=>{
      setNotes(r)})
    .catch(e=>console.log(e))},[])

  const handleChangesOnNewValue = (event) => setNewNote(event.target.value)

  const handleChangeOnPhone = (event)=> setNewPhone(event.target.value)

  const handleAddingNewPhones = (event) => {
    event.preventDefault()
    phonebook.addNewPhone({'name':newNote,'number':newPhone})
      .then((r)=>{
        try{
          setNotification(r.response.data)
          setTimeout(()=>{
            setNotification(null)
          },5000)
        } catch{
          setNotification(r)
          setTimeout(()=>{
            setNotification(null)
          },5000)
          phonebook.getAll()
            .then((r)=>{
              setNotes(r)
            })
        }
      })
      .catch((e)=>{
        console.log('e :>> ', e);
      })
  }

  // const nameAlreadyExists = (data) => {
  //   if (window.confirm(data.name +' already exists in the list, wanna update it"s number?')){
  //     const modifiedObject= {...data,number:newPhone}
  //     phonebook.updatePhone(data.id,modifiedObject).then(
  //       phonebook
  //       .getAll()
  //       .then(r=>setNotes(r))
  //       .catch(e=>console.log(e))
  //     ).then( ()=>{
  //       setNotification('The name has been modified')
  //       setTimeout(()=>{
  //         setNotification(null)
  //       },4000)
  //     })
  //   }
  // }

  const deletePhone = (id) => {
    const found = notes.find((note) => note.id==id)
    if (window.confirm("Do you really want to delete "+ found.name)) {
      phonebook.deletePhone(id)
        .then(() => {
          phonebook.getAll()
            .then((updatedNotes) => setNotes(updatedNotes))
            .catch((error) => console.log("Error updating notes after deleting phone:", error));
        })
        .catch((error) => console.log("Error deleting phone:", error));
  }
  }

  return(
    <div>
      <Titles title='Persons'/>
      <Note persons={notes} deletePhone={deletePhone}/>
      <Notification message={notification}/>
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