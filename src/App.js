import {useEffect} from "react";
import './App.css';
import { Fragment } from 'react';
function App() {
    useEffect(() => {
      document.title = 'Kaif app';
    }, []);
 
  const TITLE = 'Kaif app'
  return (
   <Fragment>
    <title>{ TITLE }</title>
   </Fragment>
  );
}

export default App;
