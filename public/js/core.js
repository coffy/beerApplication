import React from 'react';
import { render } from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import ScoreList from './components/ScoreList';
//import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import BeerProfileCreate from './components/BeerProfileCreate'




window.onload = () => {


    render(
        <MuiTheme>
            <div>
                <AppBar title="Score my Beer"
                        showMenuIconButton={false}
                        iconElementRight={
                            <FlatButton
                                label="Add tasting profile"
                                onClick = {() => {

                                    var beerProfile = render(<BeerProfileCreate/>, document.getElementById('react-create'));

                                    beerProfile.handleOpenModal();

                                }}

                            />

                            }
                >
                </AppBar>
                <ScoreList loadedBeers={[]}/>
            </div>
        </MuiTheme>
        ,document.getElementById('react-app'));
};
