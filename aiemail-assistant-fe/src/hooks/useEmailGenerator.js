import { useState } from 'react';
import { generateEmailReply } from '../api/emailService';
import { useSnackbar } from '../context/SnackbarContext';

// Define message structure
const initialConversation = [
    { type: 'AI', text: "Hello! Paste the email you received, and I'll generate a professional reply for you.", tone: null }
];

export const useEmailGenerator = () => {
    const { showSnackbar } = useSnackbar();
    
    // Conversation is now an array of objects
    const [conversation, setConversation] = useState(initialConversation);
    const [loading, setLoading] = useState(false);

    // Tone selection is now optional and can be used with the prompt
    const generateReply = async (emailContent, tone) => {
        const fullPrompt = tone ? `Tone: ${tone}. Email: ${emailContent}` : emailContent;

        // 1. Add User message to the conversation
        setConversation(prev => [
            ...prev, 
            { type: 'USER', text: fullPrompt, tone: tone || 'Default' }
        ]);

        setLoading(true);

        try {
            // Use the original service, but pass only emailContent and tone
            const reply = await generateEmailReply(emailContent, tone);

            // 2. Add AI message to the conversation
            setConversation(prev => [
                ...prev, 
                { type: 'AI', text: reply, tone: null }
            ]);
            showSnackbar('Email reply generated successfully! ✨', 'success');
        } catch (err) {
            const errorMessage = err.message || 'Network error: Failed to reach the server.';
            showSnackbar(errorMessage, 'error');
            console.error(err);

            // 3. Add Error message to the conversation
            setConversation(prev => [
                ...prev, 
                { type: 'ERROR', text: errorMessage, tone: null }
            ]);
        } finally {
            setLoading(false);
        }
    };

    return {
        conversation,
        loading,
        generateReply,
        setConversation // Allows clearing chat history
    };
};