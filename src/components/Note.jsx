import React from "react";
import { Fragment } from "react";
const Note = ({ persons, deletePhone}) => {
    const note = persons.map((note) => {
        return (
        <Fragment key={note.id}>
            <li className="note">{note.name} num {note.number}</li>
            <button onClick={()=>deletePhone(note.id)} style={{backgroundColor:'cyan'}}>delete</button>
        </Fragment>
        );
    });

    return <ul>{note}</ul>;
};

export default Note;
