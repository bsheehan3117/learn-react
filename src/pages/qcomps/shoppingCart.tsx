import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {

    //buggy code fixes below
    setPending(prevPending => prevPending + 1); //  most recent state
    await delay(2000);  // change to 2 secs
    setPending(prevPending => prevPending - 1); // decrement recent pending state
    setCompleted(prevCompleted => prevCompleted + 1); // increment based on competed prev
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}