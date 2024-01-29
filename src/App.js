
import { Fragment } from 'react';
import './App.css';
import Header from './componenrts/layout/Header';
import Meals from './componenrts/Meals/Meals';

function App() {
  return (

    <Fragment>
    <Header/>
    <main>
      <Meals/>
    </main>
    </Fragment>
    
  );
}

export default App;
