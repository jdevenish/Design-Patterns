import React, {useCallback} from "react";
import useCounterHook from "./withCounterHook";

function HoverCounterHook() {
    const [count, incrementCount] = useCounterHook();

    return (
        <h3 onMouseOver={useCallback(() => incrementCount(count + 1), [incrementCount])}>Hovered {count} Times</h3>
    );
}

export default HoverCounterHook;
