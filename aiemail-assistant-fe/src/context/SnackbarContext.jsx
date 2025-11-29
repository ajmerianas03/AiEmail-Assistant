import React, { createContext, useState, useContext } from 'react';
// Assuming GlobalSnackbar is implemented in src/components/ui/GlobalSnackbar.jsx
// This component handles the visual rendering using MUI's Snackbar and Alert.
import { GlobalSnackbar } from '../components/ui/GlobalSnackbar'; 

const SnackbarContext = createContext();

/**
 * Custom hook to easily consume the Snackbar functionality.
 * @returns {{showSnackbar: (msg: string, sev?: 'success' | 'error' | 'warning' | 'info') => void}}
 */
export const useSnackbar = () => {
    return useContext(SnackbarContext);
};

/**
 * Provider component to wrap the application and manage the global Snackbar state.
 */
export const SnackbarProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success'); // Default severity

    /**
     * Function to trigger a global notification.
     * @param {string} msg - The message to display.
     * @param {'success' | 'error' | 'warning' | 'info'} sev - The type of alert to display.
     */
    const showSnackbar = (msg, sev = 'info') => {
        setMessage(msg);
        setSeverity(sev);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return; // Prevents closing on click outside if desired
        }
        setOpen(false);
    };

    const contextValue = {
        showSnackbar,
    };

    return (
        <SnackbarContext.Provider value={contextValue}>
            {children}
            {/* The actual Mui Snackbar component is rendered here, accessible globally */}
            <GlobalSnackbar 
                open={open} 
                handleClose={handleClose} 
                message={message} 
                severity={severity} 
            />
        </SnackbarContext.Provider>
    );
};