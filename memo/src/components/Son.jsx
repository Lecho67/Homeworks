import React, { memo } from "react";

export const Son = memo(
  ({ numero, increment }) => {
  console.log("A...");

  return (
    <button
      onClick={() => {
        increment(numero);
      }}
    >
      {numero}
    </button>
  );
}); 