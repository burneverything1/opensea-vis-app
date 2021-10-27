import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { indigo, blue } from '@mui/material/colors'

import Header from './components/Header'

import Collection from './pages/Collection'
import Home from './pages/Home'

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: indigo[100],
    },
    contrastThreshold: 3,
    background: {
      default: '#1a237e'
    }
  },
  typography: {
    allVariants: {
      color: 'secondary'
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <Switch>
        <Route path='/collection'>
          <Collection />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App;
