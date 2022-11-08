import React, { useEffect, useMemo, useState } from "react";

function UseMemo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
        };
    }, [dark]);

    useEffect(() => {
        console.log("Theme changed");
    }, [themeStyles]);

    return (
        <div>
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
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    );
}

export default UseMemo;

function slowFunction(num) {
    for (let i = 0; i < 1000000000; i++) {
        return num * 2;
    }
}
