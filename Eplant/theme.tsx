import {
  createTheme,
  PaletteColorOptions,
  ThemeOptions,
  TypeBackground,
} from '@mui/material'
import React from 'react'

declare module '@mui/material/styles' {
  interface TypeBackground {
    active: string
  }
  interface PaletteColor {
    pale?: string
  }
  interface Palette {
    hot: PaletteColor
    cold: PaletteColor
  }
  interface PaletteOptions {
    hot: PaletteColorOptions
    cold: PaletteColorOptions
  }
}

export const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#99CC00',
    },
    secondary: {
      main: '#888',
      contrastText: '#000',
    },
    background: {
      default: '#e0e0e0',
      paper: '#ffffff',
      active: '#f5f5f5',
    },
    hot: {
      main: '#99CC00',
    },
    cold: {
      main: '#8C00CC',
    },
  },
  shape: {
    borderRadius: 2,
  },
})
if (light.palette?.primary) light.palette.primary.pale = '#fbfff2'

export const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#99CC00',
    },
    secondary: {
      main: '#9e9e9e',
      contrastText: '#fff',
    },
    background: {
      default: '#121212',
      paper: '#222222',
      active: '#333333',
    },
    hot: {
      main: '#99CC00',
    },
    cold: {
      main: '#8C00CC',
    },
  },
  shape: {
    borderRadius: 2,
  },
})

if (dark.palette?.primary) dark.palette.primary.pale = '#303328'
