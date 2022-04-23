import * as React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axiosIns from "../libs/axios";
import Recap from "../components/Recap";
import Loading from "../components/Loading";
import { IStats } from "../interfaces";

export default function Details(): React.ReactElement {
    const [countryStats, setCountryStats] = React.useState<IStats>(
        {} as IStats
    );
    const { countryName } = useParams();
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        (async () => {
            const res = await axiosIns.get(
                `/statistics/?country=${countryName}`
            );
            const data: IStats = res.data.response[0];
            setCountryStats(data);
            setIsLoading(false);
        })();
    }, []);
    return (
        <div>
            <Header />
            {isLoading ? <Loading /> : <Recap recapStats={countryStats} />}
        </div>
    );
}
