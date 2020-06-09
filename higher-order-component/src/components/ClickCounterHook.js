import React, {useCallback, useState} from "react";
import useCounterHook from "./withCounterHook";

function ClickCounterHook() {

    const [count, incrementCount] = useCounterHook();
    return (
        <button onClick={useCallback(() => incrementCount(count + 1),[incrementCount])}>Clicked {count} Times</button>
    );
}

export default ClickCounterHook;
