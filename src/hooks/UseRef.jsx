import React, { useEffect, useRef, useState } from "react";

function UseRef() {
    const [name, setName] = useState("");
    const previousName = useRef("");

    useEffect(() => {
        previousName.current = name;
    }, [name]);

    return (
        <>
            <div>
                <input
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    value={name}
                />
            </div>
            <p>My name is {name}</p>
            <p>My previous name was {previousName.current}</p>
        </>
    );
}

export default UseRef;
