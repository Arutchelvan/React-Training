import { useReducer, useRef, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ipText":
      return action.payload;
    case "text1":
      return action.payload;
    case "text2":
      return (
        state +
        "<-- this content is taken from current state and added this comment line"
      );
    case "clear":
      return "";
    default:
      break;
  }
}

export default function InputButtonFocus() {
  const [ipContent, dispatch] = useReducer(reducer, "");
  const inputTextAreaRef = useRef(null);
  const numberOfChangeRef = useRef(0);
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const videoControlRef = useRef(null);

  function handleContent(e) {
    dispatch({ type: "ipText", payload: e.target.value });
  }

  const defaultContent1 =
    "Hello All, This is a practice work of useReduce hook and useRefHook";

  function addText1() {
    dispatch({ type: "text1", payload: defaultContent1 });
    numberOfChangeRef.current++;
  }

  const buttonStyle = {
    display: "flex",
    gap: "20px",
    flexDirection: "column",
    maxWidth: "500px",
    padding: "50px",
  };

  function addText2() {
    dispatch({ type: "text2" });
    numberOfChangeRef.current++;
  }

  function clearContent() {
    dispatch({ type: "clear" });
    numberOfChangeRef.current++;
  }

  function handleFocus() {
    inputTextAreaRef.current.focus();
  }

  function startCount() {
    if (countRef.current !== null) return;
    countRef.current = setInterval(() => setCount((count) => count + 1), 1000);
  }

  function stopCount() {
    clearInterval(countRef.current);
    countRef.current = null;
  }

  function clearCount() {
    stopCount();
    setCount(0);
  }

  function playVideo() {
    console.log(videoControlRef.current);
    videoControlRef.current.play().catch((error) => console.log(error));
  }

  function pauseVideo() {
    console.log(videoControlRef.current);
    videoControlRef.current.pause();
  }

  return (
    <div style={buttonStyle}>
      <button onClick={handleFocus}>Click to focus on input</button>
      <button onClick={addText1}>Add Default Text 1</button>
      <button onClick={addText2}>Add Default Text 2</button>
      <textarea
        rows={10}
        type="text"
        value={ipContent}
        onChange={handleContent}
        ref={inputTextAreaRef}
      />
      <button onClick={clearContent}>Clear</button>

      <hr />

      <div>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <button onClick={startCount}>Start</button>
          <button onClick={stopCount}>Stop</button>
          <button onClick={clearCount}>Clear</button>
        </div>
        <div>Timer: {count}s</div>
      </div>

      <hr />

      <video
        width="640"
        height="360"
        controls
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
        ref={videoControlRef}
      >
        <source src="https://lorem.video/360p" type="video/mp4" />
      </video>
    </div>
  );
}
