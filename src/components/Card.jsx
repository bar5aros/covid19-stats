function Card({ name }) {
  return (
    <li>
      <div className="container">
        <p>{name}</p>
        <p>Click to see details</p>
      </div>
    </li>
  );
}

export default Card;
