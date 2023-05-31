import {useEffect} from "react";
import './App.css';
import Frontpage from "./components/newpage";
import { Fragment } from 'react';
function App() {
    useEffect(() => {
      document.title = 'Kaif app';
    }, []);
 
  const TITLE = 'Kaif app'
  return (
   <Fragment>
    <title>{ TITLE }</title>
    <Frontpage/>
   </Fragment>
  );
}

export default App;
