import React from 'react';
import { render } from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ScoreList from './components/ScoreList';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import BeerProfileCreate from './components/BeerProfileCreate';




window.onload = () => {


    render(
        <MuiTheme>
            <div>
                <AppBar title="Score my Beer"
                        showMenuIconButton={false}
                        iconElementRight={
                                <FlatButton
                                    label="Add tasting profile"

                                    icon={<i className="material-icons">add_box</i>}
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
