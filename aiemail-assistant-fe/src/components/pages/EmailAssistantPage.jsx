import { Box } from '@mui/material';
import { useEmailGenerator } from '../../hooks/useEmailGenerator';
import { ChatContainer } from '../chat/ChatContainer';
import { ChatInput } from '../chat/ChatInput';

export const EmailAssistantPage = () => {
    const {
        conversation,
        loading,
        generateReply,
    } = useEmailGenerator();

    return (
        // The main chat area uses flex column to stack history and input
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: 'calc(100vh - 64px)', // Adjust for header height
            }}
        >
            <ChatContainer conversation={conversation} loading={loading} />
            <ChatInput generateReply={generateReply} loading={loading} />
        </Box>
    );
};