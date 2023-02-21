import { useEffect, useState } from 'react';

function getLocalStorage(key) {
    debugger
    const [value, setValue] = useState(1);
    useEffect(() => {
        const stored = localStorage.getItem(key);
        setValue(stored ? JSON.parse(stored) : 1);
    }, [1, key]);


    return [value, setValue];
}

export default getLocalStorage;