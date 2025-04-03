import React, { createContext, useContext, useState, useCallback } from 'react';
import ThemeWarningModal from '../components/ThemeWarningModal';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  const handleThemeChange = useCallback(() => {
    if (isDarkMode) {
      setShowWarning(true);
    } else {
      setIsDarkMode(true);
    }
  }, [isDarkMode]);

  const handleConfirmLightMode = () => {
    setIsDarkMode(false);
    setShowWarning(false);
  };

  const handleCancelLightMode = () => {
    setShowWarning(false);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme: handleThemeChange }}>
      {children}
      {showWarning && (
        <ThemeWarningModal
          onConfirm={handleConfirmLightMode}
          onCancel={handleCancelLightMode}
        />
      )}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext; 