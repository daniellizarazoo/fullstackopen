const Note = ({notes}) => {
    const note = notes.map(note=><li key={note.id}>{note.content}</li>)
    return(
        <ul>
            {note}
        </ul>
    )
}

export default Note
