import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';
import { useTheme } from '@mui/material/styles';

/**
 * Header component for the application.
 * It's flat (elevation=0) and defined by a thin bottom border.
 */
export const Header = () => {
    const theme = useTheme();

    return (
        <AppBar 
            position="static" 
            color="inherit" // Uses the background color of the theme paper (white)
            elevation={0} // Crucial for the flat, modern look
            sx={{ 
                borderBottom: `1px solid ${theme.palette.divider || '#e0e0e0'}`,
                backgroundColor: theme.palette.background.default, // Ensure background is white
            }}
        >
            <Toolbar sx={{ maxWidth: theme.breakpoints.values.md, width: '100%', mx: 'auto' }}>
                <MailIcon color="primary" sx={{ mr: 1, fontSize: '1.8rem' }} />
                <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ 
                        flexGrow: 1, 
                        fontWeight: 500, 
                        color: theme.palette.text.primary 
                    }}
                >
                    AI Reply Assistant
                </Typography>
                {/* Optional: Add user/settings icons here */}
            </Toolbar>
        </AppBar>
    );
};