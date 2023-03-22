import { useState } from "react";
import Button from "../components/Button";
import style from "./Button.css";
const App = () => {
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pauseText, setPauseText] = useState("pause");
  const [intervalRuning, setIntervalRuning] = useState(false);
  const [intervalId, setIntervalId] = useState(Number);
  const [startClicked, setStartClicked] = useState(false);
  const startInterval = () => {
    if (intervalRuning === false) {
      setIntervalId(
        setInterval(() => {
          setCount((pervCount) => pervCount + 1);
        }, 1000)
      );
      setIntervalRuning(true);
    }
  };

  const start = () => {
    setStartClicked(true);
    startInterval();
  };
  const pause = () => {
    if (paused === false && startClicked === true) {
      setPauseText("resume");
      clearInterval(intervalId);
      setPaused(true);
      setIntervalRuning(false);
    } else if (startClicked === true) {
      setStartClicked(false);
      startInterval();
      setPauseText("pause");
      setPaused(false);
    }
  };

  const reset = () => {
    clearInterval(intervalId);
    setCount(0);
    setIntervalRuning(false);
  };
  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <Button color={"btn green"} text="start" onClick={start}></Button>
        <Button color={"btn brown"} text={pauseText} onClick={pause}></Button>
        <Button color={"btn red"} text="reset" onClick={reset}></Button>
        <p className="count">{count} Sec</p>
      </div>
    </>
  );
};

export default App;
