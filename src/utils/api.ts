export const pingServer = async () => {
  try {
    const response = await fetch('https://cric-island-backend.onrender.com/cric-island/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      console.warn('Failed to ping server:', response.status);
    }
  } catch (error) {
    console.warn('Error pinging server:', error);
  }
};

// Convert minutes to milliseconds
export const PING_INTERVAL = 14 * 60 * 1000; 