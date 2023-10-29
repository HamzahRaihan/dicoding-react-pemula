/* eslint-disable react/prop-types */
export function CounterDisplay({ count }) {
  if (count == 0) {
    return <p>{count}</p>;
  }
  if (count % 5 === 0 && count % 7 === 0) {
    return <p>FizzBuzz</p>;
  }
  if (count % 5 === 0) {
    return <p>Fizz</p>;
  }
  if (count % 7 === 0) {
    return <p>buzz</p>;
  }
  return <p>{count}</p>;
}

export function IncreaseButton({ increase }) {
  return (
    <div>
      <button onClick={increase}>+ increase</button>
    </div>
  );
}

export function ResetButton({ reset }) {
  return (
    <div>
      <button onClick={reset}>- reset</button>
    </div>
  );
}
