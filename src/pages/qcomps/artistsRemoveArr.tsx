import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists)

  const handleDelete = (id: number) => {

    // bug fix arr filters artist by id
    const updatedArtists = artists.filter(artist => artist.id !== id);
    
    // update state w new arr
    setArtists(updatedArtists);
  };

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}

            {/* bug fix below, onClick delete w handeDelete */}
            <button onClick={() => handleDelete(artist.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
