import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import buttonTexts from '../utils/buttonTexts';

interface ButtonGridProps {
  visibleButtons: boolean[];
  buttonActions: (() => void)[];
}

export default function ButtonGrid({ 
  visibleButtons, 
  buttonActions 
}: ButtonGridProps) {
  return (
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
  );
} 