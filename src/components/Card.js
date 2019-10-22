import React from 'react'

function Card(props) {
  return(
    <div className="card">
      <div className="text">{props.content}</div>
      <button onClick={() => props.remove(props.id)}>Удалить</button>
    </div>
  )
}

export default Card