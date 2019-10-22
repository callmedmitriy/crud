import React, { useState } from 'react';

function Form(props) {
  
  const [note, setNote] = useState('') 

  const addNote = evt => {
    evt.preventDefault()
    props.add(note)
  }

  return (
    <form>
      <label>New Note</label>
      <input type="text" value={note} onChange={(el) => setNote(el.target.value)}/>
      <button onClick={addNote}>Add</button>
    </form>
  )
}

export default Form