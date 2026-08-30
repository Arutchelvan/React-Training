// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [convertFrom, setConvertFrom] = useState("EUR");
  const [convertTo, setConvertTo] = useState("USD");
  const [output, setOutput] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();
      async function conversion() {
        try {
          setLoader(true);
          const res = await fetch(
            `https://api.frankfurter.dev/v2/rate/${convertFrom}/${convertTo}`,
            { signal: controller.signal },
          );
          if (!res.ok) throw new Error("Error in fetching");
          const data = await res.json();
          setOutput((amount * data.rate).toFixed(2));
          setLoader(false);
        } catch (error) {
          console.log(error.message);
        }
      }
      conversion();

      return function () {
        controller.abort();
      };
    },
    [amount, convertFrom, convertTo],
  );

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={convertFrom}
        onChange={(e) => setConvertFrom(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={convertTo} onChange={(e) => setConvertTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        OUTPUT :
        {loader ? (
          "Loading ..."
        ) : (
          <>
            {output} {convertTo}
          </>
        )}
      </p>
    </div>
  );
}
