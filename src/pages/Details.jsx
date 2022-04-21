import { useParams } from "react-router-dom";
import Header from "../components/Header";

export default function Details() {
  const { countryName } = useParams();
  return (
    <>
      <Header />
      <h1>{countryName}</h1>
    </>
  );
}
