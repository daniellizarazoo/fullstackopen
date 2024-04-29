const Note = ({persons}) => {
    const note = persons.map(note=><li key={note.id}>{note.name} num {note.number}</li>)
    return(
        <ul>
            {note}
        </ul>
    )
}

export default Note
