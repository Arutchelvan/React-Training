import { useEffect, useRef } from "react";

export default function Timer({ timeLeft, isRunning, dispatch }) {
  const timerRef = useRef(null);

  const min = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  useEffect(
    function () {
      if (isRunning) {
        timerRef.current = setInterval(() => {
          dispatch({ type: "timerTick" });
        }, 1000);
      } else {
        clearInterval(timerRef.current);
      }

      return function () {
        clearInterval(timerRef.current);
      };
    },
    [dispatch, isRunning],
  );

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
