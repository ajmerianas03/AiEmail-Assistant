import { CircularProgress } from '@mui/material';

export const LoaderIcon = ({ size = 20, color }) => (
    <CircularProgress 
        size={size} 
        sx={{ 
            color: color || 'primary.main', 
            // Simple subtle animation
            animation: 'spin 1.2s linear infinite', 
            '@keyframes spin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
            }
        }} 
    />
);