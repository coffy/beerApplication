import React from 'react';
import { render } from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import ScoreList from './components/ScoreList';



window.onload = () => {
  render(
    <MuiTheme>
      <div>
        <AppBar title="Score my Beer"
                showMenuIconButton={false}/>
        <ScoreList/>
      </div>
    </MuiTheme>
    ,document.getElementById('react-app'));
};
