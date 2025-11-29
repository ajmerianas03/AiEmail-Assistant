import axios from 'axios';

// Base URL for API calls
const API_URL = "http://localhost:8080/api/email";

/**
 * Sends the email content and desired tone to the backend for reply generation.
 * Implements robust error handling for network, server, and empty response cases.
 * * @param {string} emailContent The content of the original email.
 * @param {string} tone The desired tone for the reply (e.g., 'professional', 'casual').
 * @returns {Promise<string>} The generated email reply text.
 * @throws {Error} Detailed error message on failure.
 */
export const generateEmailReply = async (emailContent, tone) => {
  try {
    const response = await axios.post(`${API_URL}/generate`, {
      emailContent,
      tone
    });

    // Ensure the response data is handled correctly (Spring Boot typically returns text/JSON).
    const reply = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
    
    // Edge case handling: Check for an empty reply from the AI
    if (!reply || reply.trim().length === 0) {
        throw new Error("AI returned an empty reply. Please try refining your input.");
    }
    
    return reply;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server responded with an error status (4xx, 5xx)
        const status = error.response.status;
        // Try to extract a meaningful message from the server's response body
        const serverMessage = error.response.data?.message || error.response.data || `Server responded with status ${status}`;
        
        throw new Error(`API Error (${status}): ${serverMessage}`);
      } else if (error.request) {
        // Request was made but no response received (Network error, CORS issue, or server down)
        throw new Error("Network Error: No response received from the server. Please ensure the Spring Boot server is running at localhost:8080.");
      }
    }
    
    // Re-throw other errors (e.g., the "AI returned an empty reply" error)
    throw error; 
  }
};