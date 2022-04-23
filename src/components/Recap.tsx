import * as React from "react";
import { IStats } from "../interfaces";
import FormatDate from "../utils/date";

interface Props {
    recapStats: IStats;
}

export default function Recap(props: Props): React.ReactElement {
    const { continent, country, population, cases, deaths, time } = props.recapStats;
    return (
        <div>
            <p>
                {country}, located in {continent} with {population} living in
                it; has {cases.active} cases, {cases.critical} of them are
                critical. {deaths.new} people died today. as of{" "}
                {FormatDate(time)}.
            </p>
        </div>
    );
}
