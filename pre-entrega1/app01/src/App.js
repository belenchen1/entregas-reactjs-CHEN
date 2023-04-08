import './App.css';
import React from 'react';

import { Helmet } from 'react-helmet';

import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className='App'>
      <Helmet>
        <style>{'body { background-color: #F5EBEB; }'}</style>
      </Helmet>
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenidx!"} />
    </div>
  );
}

export default App;
