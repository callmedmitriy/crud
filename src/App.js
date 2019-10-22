import React from 'react';

import Notes from './components/Notes'
import Form from './components/Form'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      cardsList: []
    }
  }

  componentDidMount() {
    console.log('Send')
    this.getNotes()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('update')
  }

  addNote = note => {
    console.log('add ' + note)
    fetch('http://localhost:7777/notes', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "content": note
      })
    })
    .then(res => console.log(res))
    .then(this.getNotes())
  }

  removeNote = id => {
    console.log('remove ' + id) 
    fetch('http://localhost:7777/notes/'+id, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "content": id
      })
    })
    .then(res => console.log(res))
    .then(this.getNotes())

  }

  getNotes = () => {
    console.log('get')
    fetch('http://localhost:7777/notes')
    .then(response => response.json())
    .then(data => {
      this.setState({cardsList: data})
    },
    error => {
      console.log('error')
      console.log(error)
    })
  }
  render() {
    return (
      <>
        <Form add={this.addNote}/>
        <Notes notes={this.state.cardsList} remove={this.removeNote} refresh={this.getNotes}/>
      </>
    );
  }
}

