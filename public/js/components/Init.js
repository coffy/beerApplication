
import React from 'react';
import Score from './Score';
import 'whatwg-fetch';
import AppBar from 'material-ui/AppBar';
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ScoreList from './ScoreList';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import BeerProfileCreate from './BeerProfileCreate';
import { render } from 'react-dom';

export default class Init extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            beerList:[]
        }
    }

    reloadList(lstBeer){

        this.setState({beerList:lstBeer});
        this.forceUpdate();
    }


    render(){

        return (<MuiTheme>
            <div>
                <AppBar title="Score my Beer"
                        showMenuIconButton={false}
                        iconElementRight={
                                <FlatButton
                                    label="Add tasting profile"

                                    icon={<i className="material-icons">add_box</i>}
                                    onClick = {() => {

                                        var beerProfile = render(<BeerProfileCreate update={(lstBeer) => this.reloadList(lstBeer)}/>, document.getElementById('react-create'));
                                        beerProfile.handleOpenModal();

                                    }}
                                />
                            }
                >
                </AppBar>
                <div id="score-list-component">
                    <ScoreList loadedBeers={this.state.beerList}/>
                </div>

            </div>
        </MuiTheme>);

    }
}




