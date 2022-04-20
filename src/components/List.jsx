import Card from "./Card.jsx";

function List(props) {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <Card key={item.id} name={item} />
        ))}
      </ul>
    </div>
  );
}

export default List;
