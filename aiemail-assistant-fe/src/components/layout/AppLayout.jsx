import { Box, Container, useTheme } from '@mui/material';
import { Header } from './Header';

/**
 * AppLayout provides the main structural container for the application.
 * It sets the background color and centers the content within a max-width container.
 * * In the Chat UI redesign, the content area is primarily focused on the vertical chat flow.
 */
export const AppLayout = ({ children }) => {
    const theme = useTheme();

    return (
        // The outer Box sets the background color (pure white) and ensures minimum height.
        <Box 
            sx={{ 
                minHeight: '100vh', 
                backgroundColor: theme.palette.background.default, // #ffffff
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Header />
            
            {/* The main container limits the width (maxWidth="md") and provides
              vertical padding, defining the core chat window boundaries.
            */}
            <Container 
                maxWidth="md" 
                component="main" 
                sx={{ 
                    flexGrow: 1,
                    py: { xs: 2, sm: 4 }, // Responsive padding
                    display: 'flex',
                    flexDirection: 'column',
                    // Note: Content scrolling is handled within ChatContainer.jsx
                }}
            >
                {children}
            </Container>
        </Box>
    );
};