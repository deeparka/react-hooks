import React, { useEffect, useState } from "react";

function List({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems(2));
        console.log("Updated items");
    }, [getItems]);

    return items.map((item) => <div key={item}>{item}</div>);
}

export default List;
