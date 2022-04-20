// React hooks
import { useState, useEffect } from "react";
// UI Components
import Header from "./components/Header";
import List from "./components/List";
import axiosIns from "./libs/axios";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    axiosIns.get("/countries").then((response) => {
      console.log(response.data.response);
      setCountriesData(response.data.response);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <List countries={countriesData} />
    </div>
  );
}

export default App;
