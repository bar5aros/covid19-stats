import { Link } from "react-router-dom";

function Card({ name }) {
  return (
    <li>
      <Link to={`${name}`}>
        <div className="group container flex flex-col items-center justify-center rounded-lg bg-yellow-400 p-3 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:bg-yellow-500">
          <p className="text-2xl text-purple-600">{name}</p>
          <p className="text-md text-black">
            <span className="group-hover:text-lg group-hover:text-white">
              Click
            </span>
            to see details
          </p>
        </div>
      </Link>
    </li>
  );
}

export default Card;
