import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(true);

    const toogleTheme = () => {
        setTheme((previousTheme) => !previousTheme);
    };

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={toogleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}
