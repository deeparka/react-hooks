import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

function FunctionContextComponent() {
    const darkTheme = useTheme();
    const toogleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem",
    };
    return (
        <>
            <button onClick={toogleTheme}>Toogle Theme</button>
            <div style={themeStyles}>Function Theme</div>
        </>
    );
}

export default FunctionContextComponent;
