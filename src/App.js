import {useEffect} from "react"
import Mainpage from './components/mainpage';
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
    <Mainpage/>
   </Fragment>
  );
}

export default App;
