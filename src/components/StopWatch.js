const Stopwatch = () => {
  return (
    <div className="stopwatch-container">
      <div className="stopwatch">
        <p style={{textAlign:"center"}}>0</p>
        <button>start/resume</button>
        <button>stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
};
export default Stopwatch;
