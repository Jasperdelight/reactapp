import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";


const Person = (props) => {
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h3>Age: {props.age}</h3>
    </>
  )
  
}

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(()=> {
    alert("You've changed the counter to " + counter);
  }, [counter]);

  const name = 'Jasper';
  const isNameShowing = true;
  const isUserLoggedIn = true;
  return (
    <div className="App">
      <Person name='John' lastName={'Doe'} age='15'/>
      <Person name={'Jasper'} lastName={'Delight'} age={15+15}/>
      <button onClick={()=> setCounter((prevCount)=> prevCount + 1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=> prevCount - 1)}>-</button>


      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ): (
        <>
          <h1>test</h1>
          <h2>Theres no name</h2>
        </>
      )}
    </div>
  );
}

export default App;
