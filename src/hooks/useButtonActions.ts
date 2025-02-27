import { useMemo, useState, useCallback } from 'react';
import { shakeScreen } from '../utils/animations';

export default function useButtonActions(
    changeBackgroundColor: () => void,
    hideRandomButton: () => void
) {
    const [shuffleKey, setShuffleKey] = useState(0);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const reshuffleActions = useCallback(() => {
        setShuffleKey(prev => prev + 1);
        setSnackbarOpen(true);
    }, []);

    const availableActions = [
        changeBackgroundColor,
        shakeScreen,
        hideRandomButton,
        reshuffleActions,
        () => {
            console.log('Button 4 clicked');
        },
        () => {
            console.log('Button 5 clicked');
        },
        () => {
            console.log('Button 6 clicked');
        },
        () => {
            console.log('Button 7 clicked');
        },
        () => {
            console.log('Button 8 clicked');
        }
    ];

    const buttonActions = useMemo(() => {
        const shuffledActions = [...availableActions];
        for (let i = shuffledActions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledActions[i], shuffledActions[j]] = [shuffledActions[j], shuffledActions[i]];
        }
        return shuffledActions;
    }, [shuffleKey]);

    return {
        buttonActions,
        snackbarOpen,
        handleCloseSnackbar
    };
} 