import { Box, Typography, Avatar, useTheme } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer'; // For AI
import Face6Icon from '@mui/icons-material/Face6';     // For User
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'; // For Error
import { Grow } from '@mui/material';

export const MessageBubble = ({ type, text, index }) => {
    const theme = useTheme();
    
    const isUser = type === 'USER';
    const isAI = type === 'AI';
    const isError = type === 'ERROR';

    const avatar = isUser ? <Face6Icon /> : (isAI ? <ComputerIcon /> : <ErrorOutlineIcon />);
    const bgColor = isAI ? theme.palette.background.paper : theme.palette.primary.light;
    const textColor = isError ? theme.palette.error.main : theme.palette.text.primary;
    const iconColor = isError ? 'error' : 'primary';

    return (
        // Animate each message's entry
        <Grow in={true} timeout={300 + index * 100}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: isError ? 'center' : 'flex-start',
                    gap: 2,
                    py: 3,
                    px: { xs: 2, sm: 4 },
                    backgroundColor: isAI ? theme.palette.background.paper : theme.palette.background.default,
                    borderBottom: isError ? `1px solid ${theme.palette.error.main}` : 'none',
                }}
            >
                <Avatar sx={{ bgcolor: isUser ? theme.palette.primary.main : theme.palette.action.active }}>
                    {avatar}
                </Avatar>
                
                <Box sx={{ flexGrow: 1 }}>
                    <Typography 
                        variant="subtitle2" 
                        fontWeight="bold" 
                        color={isError ? theme.palette.error.main : theme.palette.text.primary}
                        mb={1}
                    >
                        {isUser ? 'You' : (isAI ? 'Assistant' : 'Error')}
                    </Typography>
                    
                    {/* Render text with appropriate formatting */}
                    <Typography 
                        component="div"
                        sx={{ 
                            whiteSpace: 'pre-wrap', 
                            wordBreak: 'break-word',
                            color: textColor,
                            // Subtle animation for AI typing effect can be added here
                        }}
                    >
                        {text}
                    </Typography>
                </Box>
            </Box>
        </Grow>
    );
};