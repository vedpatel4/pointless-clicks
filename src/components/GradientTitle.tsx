import Typography from '@mui/material/Typography';

interface GradientTitleProps {
  text: string;
  gradientColor1: string;
  gradientColor2: string;
}

export default function GradientTitle({ 
  text, 
  gradientColor1, 
  gradientColor2 
}: GradientTitleProps) {
  return (
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
      {text}
    </Typography>
  );
} 