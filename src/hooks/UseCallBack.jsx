import React, { useCallback, useState } from "react";
import List from "../List";

function UseMemo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // useCallback returns the function but useMemo returns only the value
    const getItems = useCallback(
        (incrementor) => {
            return [
                number + incrementor,
                number + incrementor + 1,
                number + incrementor + 2,
            ];
        },
        [number]
    );

    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };

    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={(e) => {
                    setNumber(parseInt(e.target.value));
                }}
            />
            <br />
            <button onClick={() => setDark((previousTheme) => !previousTheme)}>
                Change Theme
            </button>
            <List getItems={getItems} />
        </div>
    );
}

export default UseMemo;
