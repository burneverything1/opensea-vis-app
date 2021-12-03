import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { CssBaseline, Grid } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import Header from './components/Header'

import Collection from './pages/Collection'
import Home from './pages/Home'

import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Grid container direction='column' justifyContent='center'>
        <Grid item xs={12} sm={10}>
          <Header/>
        </Grid>
        <Grid item xs={12} sm={10} >
          <Switch>
            <Route path='/collection/:add' children={<Collection />}>
              <Collection />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App;
