import React from 'react'

import Card from './Card'

function Notes(props) {

  const removeNote = id => {
    props.remove(id)
  }

  return(
    <div className="notes">
      <h2>Notes</h2>
      <button onClick={() => props.refresh()}>refresh</button>
      {
        props.notes.map(note => <Card {...note} remove={removeNote} key={note.id}/>)
      }
    </div>
  )
}

export default Notes