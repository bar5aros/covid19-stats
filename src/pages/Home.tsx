import * as React from "react";
// UI Components
import Header from "../components/Header";
import List from "../components/List";
import axiosIns from "../libs/axios";
import { ICountry } from "../interfaces";

export default function Home() {
    const [countriesList, setCountriesList] = React.useState<ICountry[]>([]);
    React.useEffect(() => {
        (async () => {
            const { data } = await axiosIns.get("/countries");
            setCountriesList(data.response);
        })();
    }, []);
    return (
        <>
            <Header />
            <List countriesData={countriesList} />
        </>
    );
}
