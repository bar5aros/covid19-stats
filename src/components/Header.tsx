import * as React from "react";

export default function Header(): React.ReactElement {
    return (
        <header className="flex h-16 place-content-center justify-center bg-purple-700">
            <h1 className="m-auto text-2xl font-bold text-white">
                Covid-19 Stats
            </h1>
        </header>
    );
}
