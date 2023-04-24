import './App.css';
import React from 'react';

import { Helmet } from 'react-helmet';

import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'


function App() {
  return (
    <div className='App'>
      <Helmet>
        <style>{'body { background-color: #F5EBEB; }'}</style>
      </Helmet>
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenidx!"} />
      <ItemCount initial={1} stock={10} onAdd={quantity => console.log('Cantidad agergada: ', quantity)} />
    </div>
  );
}

export default App;
