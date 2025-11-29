import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a73e8', // Primary Action Blue (for buttons/focus)
      light: '#e8f0fe', // Very light blue for subtle backgrounds (like ChatGPT's prompt area)
    },
    background: {
      default: '#ffffff', // Pure white background for the whole page
      paper: '#f7f8f9',   // Very light gray for AI message bubbles (Gemini/ChatGPT style)
    },
    text: {
      primary: '#202124', // Near black for main text
      secondary: '#70757a', // Softer gray for context/hints
    },
    // Adding a tone color for User/AI identification
    action: {
        active: '#3c4043', // Dark color for icons (like the send button)
    }
  },
  typography: {
    fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    h3: {
      fontWeight: 400,
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    }
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
    },
    MuiPaper: { // General paper elements (used for the floating chat input)
        styleOverrides: {
            root: {
                borderRadius: '24px', // Highly rounded corners for a modern look
            }
        }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 24px',
          transition: 'all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1)',
          '&:hover': {
            backgroundColor: 'rgba(26, 115, 232, 0.04)',
          },
        },
      },
    },
    MuiInputBase: { // Targeting input base for the primary chat text area
        styleOverrides: {
            root: {
                fontSize: '16px',
                padding: '12px 16px',
            }
        }
    },
    MuiAppBar: {
        defaultProps: {
            elevation: 0, 
        },
        styleOverrides: {
            root: {
                borderBottom: '1px solid #e0e0e0',
            }
        }
    }
  },
});

export default theme;