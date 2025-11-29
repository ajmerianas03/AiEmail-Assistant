// src/components/ui/GlobalSnackbar.jsx
import { Snackbar, Alert } from '@mui/material';

export const GlobalSnackbar = ({ open, handleClose, message, severity }) => {
  return (
    <Snackbar 
      open={open} 
      autoHideDuration={6000} 
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Centered bottom like many modern UIs
    >
      <Alert 
        onClose={handleClose} 
        severity={severity} 
        sx={{ 
          width: '100%', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          borderRadius: '8px',
          fontWeight: 500,
        }}
        role="alert" 
      >
        {message}
      </Alert>
    </Snackbar>
  );
};