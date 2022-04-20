// React hooks
import { useState, useEffect } from "react";
// UI Components
import Header from "../components/Header";
import List from "../components/List";
import axiosIns from "../libs/axios";

export default function Home() {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    axiosIns.get("/countries").then((response) => {
      console.log(response.data.response);
      setCountriesData(response.data.response);
    });
  }, []);

  return (
    <>
      <Header />
      <List countries={countriesData} />
    </>
  );
}
