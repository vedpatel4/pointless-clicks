import { useState, useEffect } from 'react';
import generateRandomColor from '../utils/generateRandomColor';

export default function useBackgroundColor() {
    const [backgroundColor, setBackgroundColor] = useState(generateRandomColor());

    useEffect(() => {
        document.documentElement.style.setProperty('--background-color', backgroundColor);
    }, [backgroundColor]);

    const changeBackgroundColor = () => {
        setBackgroundColor(generateRandomColor());
    };

    return { backgroundColor, changeBackgroundColor };
} 