import "./App.css";
import { RecoilRoot } from "recoil";
import { useState } from "react";
import { memo } from "react";
import { useEffect } from "react";

 function App() {
  return (
    <>
    
        <Counter />

    </>
  );
}
function Counter() {
 
  const [count,setCount]=useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCount(c=>c+1)
    },3000)
  },[]);

  return (
    <div>
      <CurrentCount count={count}/>
      <Increase />
      <Decrease />
    </div>
  );
}

const CurrentCount =memo(function({count}) {
  return (
  <div>
    {1}
  </div>
  );
})

const Decrease = memo(function() {
  function decrease() {
    // Logic for decrease
  }
  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
});



const Increase = memo(function() {

  
  function increase() {
    
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
});

export default App;
