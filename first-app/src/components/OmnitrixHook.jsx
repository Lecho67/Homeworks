import React from "react";
import { useFetch } from "../hooksowo/useFetch";
import useCounter from "../hooksowo/useCounter";

function OmnitrixHook() {
  const { counter, increment } = useCounter();
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <hr />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <blockquote>
          <p>{data[0]?.quote}</p>
          <footer>{data[0]?.author}</footer>
        </blockquote>
      )}

      <button onClick={() => increment()}>Next Quote</button>
    </>
  );
}

export default OmnitrixHook;