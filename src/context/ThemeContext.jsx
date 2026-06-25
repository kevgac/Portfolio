import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Création du contexte global
const ThemeContext = createContext();

// 2. Création du composant Fournisseur (Provider) qui va envelopper l'application
export const ThemeProvider = ({ children }) => {
  // On vérifie si l'utilisateur a déjà choisi un thème auparavant, sinon mode sombre par défaut
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  // À chaque changement de thème, on applique la classe sur la balise <html> et on sauvegarde
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Fonction pour basculer d'un mode à l'autre
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Hook personnalisé pour utiliser le thème facilement ailleurs
export const useTheme = () => useContext(ThemeContext);