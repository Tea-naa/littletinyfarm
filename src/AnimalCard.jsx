import './AnimalCard.css';

function AnimalCard({ name, image }) {
  return (
    <div className="animal-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default AnimalCard;
