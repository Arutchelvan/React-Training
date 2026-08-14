import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));

function RatingComp() {
  const [getRating, setGetRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" onSetRating={setGetRating} />
      <p>Selected rating is {getRating} value</p>
    </div>
  );
}

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxLength={5}
      messages={["terrible", "fine", "good", "better", "best"]}
      defaultValue={2}
    />
    <StarRating maxLength={5} size={24} className="test" color="red" />
    <RatingComp />
  </React.StrictMode>,
);
