import { useState } from "react";
import { useSelector } from "react-redux";

import { updateName } from "./customerSlice";
import { useDispatch } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  const [rename, setRename] = useState("");

  const dispatch = useDispatch();

  function handleRename() {
    dispatch(updateName(rename));
    setRename("");
  }
  return (
    <div>
      <h2>👋 Welcome, {customer}</h2>
      <div>
        <input
          value={rename}
          type="text"
          onChange={(e) => setRename(e.target.value)}
        />
        <button onClick={handleRename}>Rename</button>
      </div>
    </div>
  );
}

export default Customer;
