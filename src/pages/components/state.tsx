import { useState } from 'react';
import { sculptureList } from '../../data/data';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {

    // bug was here
    setIndex((currentIndex) => (currentIndex + 1) % sculptureList.length);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
