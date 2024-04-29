import React from "react"

const Note = ({notes,toggleImportance}) => {
    
    const note = notes.map(note=>{
        const label = note.important?
        'make not important' : 'make important'
        return (
            <React.Fragment key={note.id}>
                <li>{note.content}</li>
                <button onClick={()=>toggleImportance(note.id)}>{label}</button>
            </React.Fragment>
        )
    })
    return(
        <ul>
            {note}
        </ul>
    )
}

export default Note
