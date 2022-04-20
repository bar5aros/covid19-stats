import Card from "./Card";

function List({ countries }) {
  return (
    <div>
      <ul>
        {countries.map((country) => (
          <Card key={country} name={country} />
        ))}
      </ul>
    </div>
  );
}

export default List;
