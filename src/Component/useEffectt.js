import { useState, useEffect } from "react";
function useEffectt() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 4);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>after Calculation: {calculation}</p>
    </>
  );
};
export default useEffectt;
export const adminCredentials = {
  EmailAddress : 'khan@gmail.com',
  Password: '12345'
}

export let orders = [];
