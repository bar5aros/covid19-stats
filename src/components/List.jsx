import Card from "./Card";

function List({ countries }) {
  return (
    <section>
      <ul className="flex flex-row flex-wrap items-center justify-center gap-5 p-3">
        {countries.map((country) => (
          <Card key={country} name={country} />
        ))}
      </ul>
    </section>
  );
}

export default List;
