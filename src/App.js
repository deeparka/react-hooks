import React from "react";
import useLocalStorage from "./custom hook/useLocalStorage";

function App() {
    const [name, setName] = useLocalStorage("name", "");
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}

export default App;
