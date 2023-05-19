import { useTheme } from 'next-themes';
import { GlobalStyles } from '@mui/material';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, globalStyles, lightTheme } from '../theme';
import { FC, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
const MUIThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    resolvedTheme === 'light'
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme);
  }, [resolvedTheme]);

  return (
    <IconContext.Provider value={{ size: '34px' }}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        {children}
      </ThemeProvider>
    </IconContext.Provider>
  );
};

export default MUIThemeProvider;
