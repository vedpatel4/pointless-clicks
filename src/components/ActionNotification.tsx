import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface ActionNotificationProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

export default function ActionNotification({
  open,
  onClose,
  message
}: ActionNotificationProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity="info" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
} 