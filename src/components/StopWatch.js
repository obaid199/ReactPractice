import { useState ,useRef } from "react";
const Stopwatch = () => {
  const [counter , setCounter]= useState(0);
  const timer = useRef();
  const startResume = ()=>{
    if(timer.current) return;
      timer.current = setInterval(()=>{
      setCounter((pre)=>{
        return pre + 1;
      })
    },100)
  }
  const stop = ()=>{
    clearInterval(timer.current)
    timer.current = null;
  }
  const reset = ()=>{
    clearInterval(timer.current);
    setCounter(0);
    timer.current = null;
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
