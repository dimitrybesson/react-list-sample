import React, { useEffect, useState } from 'react';
import './App.css';
import List from './List.js';

const defaultItems = [
  {id: 1, title: 'Hello World'},
  {id: 2, title: 'Add useState'},
  {id: 3, title: 'Add useEffect'},
]

function App() {
  const [state, setState] = useState({
    items: []
  })

  const deleteItem = id => {
    console.log('deleting id: ', id)

    fetch(`http://localhost:8000/items/${id}`, {method: 'DELETE'})
      .then(res => console.log('sent delete request'))

    const newItems = state.items.filter(item => (item.id !== id))
    setState({...state, items: newItems})
  }

  const getItems = () => {
    console.log('getting items')
    fetch('http://localhost:8000/items')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setState({...state, items: json})
      })
  }

  useEffect(() => {
    getItems()
  }, [state.items.length])

  return (
    <div className="App">
      <List items={state.items} onDelete={deleteItem}/>
    </div>
  );
}

export default App;
