// React hooks
import { useState, useEffect } from "react";
// UI Components
import Header from "./components/Header";
import List from "./components/List";
import axiosIns from "./libs/axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from './pages/Details'
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
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/:country">
                    <Details ofCountry={}/>
                    </Route>
            </Switch>
        </Router>

      <Header />
      <List countries={countriesData} />
    </div>
  );
}

export default App;
