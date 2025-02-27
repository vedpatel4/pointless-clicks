import { useState } from 'react';

export default function useVisibleButtons(count: number) {
    const [visibleButtons, setVisibleButtons] = useState(Array(count).fill(true));

    const hideRandomButton = () => {
        const visibleIndices = visibleButtons.map((isVisible, index) => isVisible ? index : -1)
            .filter(index => index !== -1);

        if (visibleIndices.length === 0) return;

        const randomIndex = visibleIndices[Math.floor(Math.random() * visibleIndices.length)];
        const newVisibleButtons = [...visibleButtons];
        newVisibleButtons[randomIndex] = false;

        setVisibleButtons(newVisibleButtons);
        setTimeout(() => {
            setVisibleButtons(prevState => {
                const updatedButtons = [...prevState];
                updatedButtons[randomIndex] = true;
                return updatedButtons;
            });
        }, 5000);
    };

    return { visibleButtons, hideRandomButton };
} 