import { useState } from "react";

export default function Calculator() {
  const [bill, setBill] = useState("");
  const [friend1, setFriend1] = useState(0);
  const [friend2, setFriend2] = useState(0);

  const tipValue = bill * ((friend1 + friend2) / 2 / 100);

  function resetAll() {
    setBill("");
    setFriend1(0);
    setFriend2(0);
  }

  return (
    <div>
      <Bill bill={bill} updateBill={setBill} />
      <ServiceComponent
        labelText="How did you like the service?"
        likeValue={friend1}
        updateLikeValue={setFriend1}
      />
      <ServiceComponent
        labelText="How did your friend like the service?"
        likeValue={friend2}
        updateLikeValue={setFriend2}
      />

      {bill > 0 && (
        <>
          <Output billAmount={bill} tipValue={tipValue} />
          <Reset resetAll={resetAll} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, updateBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => updateBill(Number(e.target.value))}
      />
    </div>
  );
}

function ServiceComponent({ likeValue, updateLikeValue, labelText }) {
  return (
    <div>
      <label>{labelText}</label>
      <select
        value={likeValue}
        onChange={(e) => updateLikeValue(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>Good (10%)</option>
        <option value={10}>Best (15%)</option>
        <option value={20}>Awesome (20%)</option>
      </select>
    </div>
  );
}

function Output({ billAmount, tipValue }) {
  return (
    <div>
      <h2>
        You pay ${billAmount + tipValue} (${billAmount} + ${tipValue} tip)
      </h2>
    </div>
  );
}

function Reset({ resetAll }) {
  return <button onClick={() => resetAll()}>Reset</button>;
}
