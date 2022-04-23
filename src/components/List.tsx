import * as React from "react";
import Card from "./Card";
import { ICountry } from "../interfaces";

interface Props {
    countriesData: ICountry[];
}

export default function List({ countriesData }: Props): React.ReactElement {
    return (
        <section>
            <ul className="flex flex-row flex-wrap items-center justify-center gap-5 p-3">
                {countriesData.map((country) => (
                    <Card key={country} name={country} />
                ))}
            </ul>
        </section>
    );
}
