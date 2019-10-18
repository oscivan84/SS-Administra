import React from 'react';
import logo from './logo.svg';
import './App.css';

function HelloWord(){
  return(
    <div>
      Hello Word
      </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1 className="display-1"></h1>
        </p>
        <div className="row">
            <div className="col">
              <label>
              Usuario:
              <input type="text" name="Usuario" />
              </label>
            </div>
            
            <div className="col">
              <label>
              Contrasena:
              <input type="password" name="Usuario" />
              </label>
            </div>
            
            <div className="col">
              <input type="submit" value="Entrar" />
            </div>
     
          </div>    
        
        
      </header>
    </div>
  );
}

export default App;
