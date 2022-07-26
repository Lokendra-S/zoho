import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import { AppContext } from './Context/App.context';
import './Styles/main.css'
import React from 'react';

function App() {
  return (
    <>
      <AppContext>
        <Main/>
      </AppContext>
    </>
  );
}

export default App;
