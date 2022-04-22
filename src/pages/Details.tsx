import { useParams } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import Header from "../components/Header";
import axiosIns from "../libs/axios";
import Recap from "../components/Recap";
import Loading from "../components/Loading";

export default function Details() {
  const [countryStats, setCountryStats] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { countryName } = useParams();
  useLayoutEffect(() => {
    axiosIns
      .get(`/statistics/?country=${countryName}`)
      .then((res) => {
        console.log(res.data);
        setCountryStats(res.data.response[0]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  console.log(countryStats);

  return (
    <div>
      <Header />
      {isLoading ? <Loading /> : <Recap stats={countryStats} />}
      {/* {countryStats && <Recap stats={countryStats} />} */}
    </div>
  );
}
