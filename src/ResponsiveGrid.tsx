import { useMemo, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import './ResponsiveGrid.css';
import buttonTexts from './utils/buttonTexts';
import getContrastingColors from './utils/getContrastingColors';
import { shakeScreen } from './utils/animations';
import useBackgroundColor from './hooks/useBackgroundColor';
import useVisibleButtons from './hooks/useVisibleButtons';

export default function ResponsiveGrid() {
  const { backgroundColor, changeBackgroundColor } = useBackgroundColor();
  const { visibleButtons, hideRandomButton } = useVisibleButtons(9);
  const [shuffleKey, setShuffleKey] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [gradientColor1, gradientColor2] = useMemo(() => 
    getContrastingColors(backgroundColor), 
    [backgroundColor]
  );

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

  return (
    <>
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={3000}
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
        Actions reshuffled!
      </Alert>
    </Snackbar>
    <Typography 
      variant="h2"
      color="blue-gray"
      sx={{  
        marginBottom: '60px',
        background: `linear-gradient(45deg, ${gradientColor1} 30%, ${gradientColor2} 90%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      Pointless Clicks
    </Typography>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(9)).map((_, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <Paper 
              className="grid-item clickable-item"
              onClick={buttonActions[index]}
              sx={{ 
                visibility: visibleButtons[index] ? 'visible' : 'hidden',
                opacity: visibleButtons[index] ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            >
              {buttonTexts[index]}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
}
