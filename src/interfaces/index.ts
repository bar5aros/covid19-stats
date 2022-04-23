export interface ICases {
    new: string;
    active: number;
    critical: number;
    recovered: number;
    total: number;
    "1M_pop": string;
}

export interface IDeaths {
    new: string;
    total: number;
    "1M_pop": string;
}

export interface ITests {
    total: number;
    "1M_pop": string;
}

export type ICountry = string;

export interface IStats {
    continent: string;
    country: ICountry;
    population: number;
    cases: ICases;
    deaths: IDeaths;
    tests: ITests;
    day: string;
    time: string;
}
