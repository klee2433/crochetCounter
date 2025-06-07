import { useState } from 'react';
import { getItem, setItem } from '../utils/localStorage';
import { useEffect } from 'react';

export function usePersistedState(key, initialValue) {
    const [value, setValue] = useState(() => {
        const item = getItem(key);

        // upon first loading the app
        if (key == "projects" && item == null) {
            setItem("notes/Template", "--- All changes are saved automatically --- \n(Example)\n Row 1: 5 dc \n Row 2: 2 sc in each dc around");
        }

        return item || initialValue;
    });

    useEffect(() => {
        setItem(key, value);
    }, [key, value]);

    return [value, setValue];
}