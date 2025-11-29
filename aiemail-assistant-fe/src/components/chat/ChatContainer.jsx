import { Box, Paper } from '@mui/material';
import { MessageBubble } from './MessageBubble';
import { LoaderIcon } from '../ui/LoaderIcon';

export const ChatContainer = ({ conversation, loading }) => {
    // This container would typically have scrolling logic, but for simplicity, we focus on rendering.
    return (
        <Paper 
            elevation={0} // Ensure it's flat
            sx={{
                flexGrow: 1,
                overflowY: 'auto',
                minHeight: '400px', // Ensures initial visibility
                maxHeight: { xs: 'calc(100vh - 200px)', sm: 'calc(100vh - 250px)' }, // Height for chat history
                mb: 2,
                borderRadius: '12px',
                border: '1px solid #e0e0e0', // Defined border
            }}
        >
            {conversation.map((msg, index) => (
                <MessageBubble key={index} {...msg} index={index} />
            ))}
            
            {/* Simple loading indicator at the bottom of the chat */}
            {loading && (
                 <Box sx={{ p: 3, pl: 4, color: 'text.secondary' }}>
                    <LoaderIcon /> Assistant is typing...
                 </Box>
            )}
            
            {/* Scroll anchor to keep the latest message in view (add useRef in production) */}
            <div id="end-of-chat" />
        </Paper>
    );
};