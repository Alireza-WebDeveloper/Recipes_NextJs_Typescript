import { createTheme, css, Theme } from '@mui/material/styles';
import { colors } from '@mui/material';
export const DEFAULT_THEME = 'dark';

/// Typography Setting

export const lightTheme = createTheme({
  direction: 'rtl',
  palette: {
    primary: { main: colors.deepPurple['800'] },
    default: { main: colors.grey['300'] },
    header: { main: 'rgba(221, 221, 221, 0.45)' },
    secondary: { main: colors.red['800'] },
    info: { main: colors.amber['700'] },
    warning: { main: colors.orange['700'] },
    mode: 'light',
  },
  typography: {
    fontFamily: 'Yekan',
  },
});
export const darkTheme = createTheme({
  direction: 'rtl',
  palette: {
    primary: { main: colors.deepPurple['400'] },
    default: { main: colors.grey['900'] },
    header: { main: 'rgba(55, 58, 61,0.45)' },
    secondary: { main: colors.red['300'] },
    info: { main: colors.amber['400'] },
    warning: { main: colors.orange['300'] },
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Yekan',
  },
});
export const globalStyles = css`
  :root {
    body {
      background-color: #f5f5f5;
      color: #121212;
    }
  }

  [data-theme='dark'] {
    body {
      background-color: #121212;
      color: #fff;
    }
  }
`;
