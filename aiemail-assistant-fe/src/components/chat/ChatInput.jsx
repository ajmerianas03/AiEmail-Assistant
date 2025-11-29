import { useState } from 'react';
import { Box, TextField, IconButton, FormControl, InputLabel, Select, MenuItem, Paper, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { LoaderIcon } from '../ui/LoaderIcon';

export const ChatInput = ({ generateReply, loading }) => {
    const theme = useTheme();
    const [inputContent, setInputContent] = useState('');
    const [tone, setTone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputContent.trim() || loading) return;

        generateReply(inputContent, tone);
        setInputContent(''); 
    };

    return (
        <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{
                position: 'sticky', 
                bottom: 0,
                width: '100%',
                maxWidth: theme.breakpoints.values.md,
                mx: 'auto',
                pb: 2,
                backgroundColor: theme.palette.background.default, 
            }}
        >
            <Paper 
                component={Box}
                elevation={6} // subtle floating shadow
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 1,
                    borderRadius: '24px', // more rounded
                    border: '1px solid #e0e0e0',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
            >
                {/* tone Selecting Dropdown (Integrated with the Input Area) */}
                <FormControl variant="standard" sx={{ minWidth: 100, ml: 1 }}>
                    <Select
                        value={tone || ''}
                        onChange={(e) => setTone(e.target.value)}
                        displayEmpty
                        disabled={loading}
                        sx={{
                            '& .MuiSelect-select': { py: 0.5, px: 1, fontSize: '0.85rem', color: theme.palette.primary.main, fontWeight: 500 },
                            '&:before, &:after': { display: 'none' }, // Remove underline
                            '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
                        }}
                    >
                        <MenuItem value="">Default</MenuItem>
                        <MenuItem value="professional">Professional</MenuItem>
                        <MenuItem value="casual">Casual</MenuItem>
                        <MenuItem value="friendly">Friendly</MenuItem>
                    </Select>
                </FormControl>

                {/* main text for Input Area */}
                <TextField
                    multiline
                    maxRows={6}
                    variant="standard"
                    placeholder="Paste the email content here..."
                    value={inputContent}
                    onChange={(e) => setInputContent(e.target.value)}
                    disabled={loading}
                    fullWidth
                    sx={{
                        mx: 1,
                        '& .MuiInputBase-root': { py: 1 },
                        '& .MuiInputBase-input': { p: 0, fontSize: '1rem' },
                        '&:before, &:after': { display: 'none' },
                    }}
                />

                {/* send Button */}
                <IconButton
                    type="submit"
                    color="primary"
                    disabled={!inputContent.trim() || loading}
                    aria-label="Send Message"
                    sx={{
                        backgroundColor: loading ? 'transparent' : theme.palette.primary.main,
                        color: loading ? theme.palette.primary.main : 'white',
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                        },
                        p: 1.5,
                        mr: 0.5
                    }}
                >
                    {loading ? <LoaderIcon size={24} color={theme.palette.primary.main} /> : <SendIcon />}
                </IconButton>
            </Paper>
        </Box>
    );
};