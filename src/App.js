import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cakes from './Components/cakes';
import {Provider}  from 'react-redux';
import store from './Redux/store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Cakes />
      </Provider>
    </div>
  );
}

export default App;
