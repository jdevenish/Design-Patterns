import { useState, useCallback } from 'react'

const useCounterHook = (defaultCount = 0) => {
    const [count, setCount] = useState(defaultCount);
    const incrementCount = useCallback(e => {
        setCount(count+1)
    }, [count]);

    return [count, incrementCount];
}

export default useCounterHook
