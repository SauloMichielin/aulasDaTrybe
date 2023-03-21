import { createContext, useMemo } from 'react';
import '../App.css';
import useLocalStorage from '../hooks/useLocalStorage';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [dark, setDark] = useLocalStorage('theme', true);

  const toggleTheme = () => {
    setDark(!dark);
  };

  const contextValue = useMemo(() => ({ dark, toggleTheme }), [dark]);

  return (
    <ThemeContext.Provider value={ contextValue }>
      <div className={ dark ? 'App__Dark' : 'App__Light' }>
        { children }
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
