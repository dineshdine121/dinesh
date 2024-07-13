import React from 'react';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';

function App() {
  return (
    <div>
      <h1>CRUD App with Redux</h1>
      <AddItemForm />
      <ItemList />
    </div>
  );
}

export default App;
