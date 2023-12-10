import { useState ,useRef } from "react";
const Stopwatch = () => {
  const [counter , setCounter]= useState(0);
  const timer = useRef();
  const startResume = ()=>{
    console.log(timer)
      timer.current = setInterval(()=>{
      setCounter((pre)=>{
        return pre + 1;
      })
    },1000)
  }
  const stop = ()=>{
    console.log("stop button is clicked")
  }
  const reset = ()=>{
    console.log("reset button is clicked")
  }
  return (
    <div className="stopwatch-container">
      <div className="stopwatch">
        <p style={{textAlign:"center"}}>{counter}</p>
        <button onClick={startResume}>start/resume</button>
        <button onClick={stop}>  stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
export default Stopwatch;
