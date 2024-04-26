import { useState } from "react"
import Note from './components/Note'


const App =  () =>{
  const [newFilter,setNewFilter] = useState('')
  const [newPerson,setNewPerson] = useState('')
  const [newNumber,setNewNumber] = useState([])
  const [persons, setPersons] = useState([{ name: "Daniel",number:3102387649}, { name: "Maria",number:3122151678}, { name: "John",number:3508067461 }])

  const handleNewPersonsChange = (event) =>{
    setNewPerson(event.target.value)
  }

  const handleNewNumberChange = (event) => setNewNumber(event.target.value)

  const createNewPerson = (event) => {
    event.preventDefault()
    !persons.some(person=> person.name == newPerson) ?
    setPersons(persons.concat({name: newPerson,number: newNumber}))
    : alert(`${newPerson} is already added to phonebook`)
}

const handleNewFilter = (event) => setNewFilter(event.target.value);

const personFound = persons.find(person => person.name === newFilter);

  return(
    <div>
      <h2>Phonebook</h2>
      <input placeholder="ingrese nombre a buscar" value={newFilter} onChange={handleNewFilter}></input>
      <form onSubmit={createNewPerson}>
        <div>
          <h3> Name:</h3>
          <input placeholder="phonebook name" value={newPerson} onChange={handleNewPersonsChange}></input>
          <input placeholder="phone" value={newNumber} onChange={handleNewNumberChange}></input>
        </div>
        <button type="submit">enviar</button>
      </form>
      <h2>Persons:</h2>
      {
        newFilter.length > 0 ? 
        (
        personFound !== undefined ? 
        <p>{personFound.name} {personFound.number}</p> : 
        <p>nombre no encontrado</p>
        )
        : persons.map(person =><p key={person.name}>{person.name} {person.number}</p>)
      }
    </div>
  )
}

export default App