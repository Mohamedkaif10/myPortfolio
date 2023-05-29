import {useEffect} from "react"
import Mainpage from './components/mainpage';
import './App.css';
import { Fragment } from 'react';
function App() {
    useEffect(() => {
      document.title = 'My Page Title';
    }, []);
 
  const TITLE = 'My Page Title'
  return (
   <Fragment>
    <title>{ TITLE }</title>
    <Mainpage/>
   </Fragment>
  );
}

export default App;
