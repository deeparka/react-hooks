import React, { useEffect, useState } from "react";

function UseEffect() {
    const [resourceType, setResourceType] = useState("");

    useEffect(() => {
        console.log("resource changed");

        // clean up function
        // it runs only on unmount
        return () => {
            console.log("return from resource change");
        };
    }, [resourceType]);

    return (
        <div>
            <button onClick={() => setResourceType("posts")}>posts</button>
            <button onClick={() => setResourceType("users")}>users</button>
            <button onClick={() => setResourceType("comments")}>
                comments
            </button>
            <p>{resourceType}</p>
        </div>
    );
}

export default UseEffect;
