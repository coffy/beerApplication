
import React from 'react';
import { render } from 'react-dom';
import 'whatwg-fetch';
import AppBar from      'material-ui/AppBar';
import MuiTheme from    'material-ui/styles/MuiThemeProvider';
import FlatButton from  'material-ui/FlatButton';
import ScoreList from   './ScoreList';
import Score from './Score';
import BeerProfileCreate from './BeerProfileCreate';

export default class Init extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            beerList:[]
        }
    }

    reloadList(lstBeer){
        var scoreList = render(<ScoreList/>, document.getElementById('score-list-component'));
        scoreList.reloadList(lstBeer);
    }


    render(){

        return (<MuiTheme>
            <div>
                <AppBar className="app-bar" title="Score my Beer"
                        showMenuIconButton={false}
                        iconElementRight={
                                <FlatButton
<<<<<<< HEAD
=======
                                    label="Add tasting profile"
>>>>>>> Gilfell87/master
                                    icon={<i className="material-icons">add_box</i>}
                                    children={<span className="icon-label" >Add tasting</span>}
                                    onClick = {() => {
                                        var beerProfile = render(<BeerProfileCreate update={(lstBeer) => this.reloadList(lstBeer)}/>, document.getElementById('react-create'));
                                        beerProfile.handleOpenModal();
                                    }}
                                />
                            }
                >
                </AppBar>
            </div>
        </MuiTheme>);

    }
}




