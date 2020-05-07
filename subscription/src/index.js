import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MuiThemeProvide, createMuiTheme, MuiThemeProvider} from '@material-ui/core'

const theme = createMuiTheme()

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
      <App />
  </MuiThemeProvider>, 
  document.getElementById('root')
);


