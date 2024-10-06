interface ProfileProps {
  name: string;
  imageSrc: string;
  profession: string;
  awards: string;
  discovery: string;
}

function Profile({ name, imageSrc, profession, awards, discovery }: ProfileProps) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li><b>Profession: </b>{profession}</li>
        <li><b>Awards: </b>{awards}</li>
        <li><b>Discovered: </b>{discovery}</li>
      </ul>
    </section>
  );
}


export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageSrc="https://i.imgur.com/szV5sdGs.jpg"
        profession="physicist and chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovery="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageSrc="https://i.imgur.com/YfeOqp2s.jpg"
        profession="geochemist"
        awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
