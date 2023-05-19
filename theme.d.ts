import { PaletteColor, PaletteColorOptions, ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    default?: PaletteColor;
    header?: PaletteColor;
  }
  interface PaletteOptions {
    default?: PaletteColorOptions;
    header?: PaletteColorOptions;
  }
}
