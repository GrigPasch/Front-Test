import React, {useState} from 'react';

const Counter = () => {
    const[count, setCount] = useState(0);
    return(
      <div>
        <button onClick = {() => setCount(count + 1)}> Click this button to add 1 point!</button>
        <p>{count}</p>
      </div>
    )
  }
  export  function App(){
  
  }
  
  
  export default Counter;