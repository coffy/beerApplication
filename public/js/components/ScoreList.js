
import React from 'react';
import Score from './Score';
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress'
import 'whatwg-fetch';

export default class ScoreList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loadedBeers:[],
            draw: false
        }
    }

    componentWillMount(){

        var self = this;


        fetch('/scores',{
                method: 'GET',
                mode: 'cors'
            })
            .then(function(response) {

                return response.json();
            })
            .then(function(json){

                self.setState({
                    loadedBeers : json,
                    draw: true
                });
            });
    };


    reloadList(lst){

        this.setState({loadedBeers: lst});
    }

    drawScoreList(){

        let html =
            <MuiTheme>
                <div className='table-beer-margin'>
                    <div className='col-md-6'>
                        <table className='home table table-hover'>
                            <thead>
                            <tr>
                                <th> Beer </th>
                                <th> Type </th>
                                <th> Brewery </th>
                                <th>  </th>
                                <th>  </th>
                                <th>  </th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.loadedBeers.map(lstData =>  <Score update = {(lst) => { this.reloadList(lst)}}key={lstData._id} {...lstData} />)}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-md-6' id='beer-tasting-detail'>
                    </div>
                </div>
            </MuiTheme>;

        let htmlEmpty =
            <div className='table-beer-margin-empty'>
                no beer tasting yet
            </div>;

        let htmlLoading =
            <MuiTheme>
                <div className='center-loading'>
                    <CircularProgress />
                </div>
            </MuiTheme>;

        if(!this.state.draw){
            return htmlLoading;
        }

        if(this.state.loadedBeers.length > 0){
            return html;
        }else{
            return htmlEmpty;
        }

    }



    render(){

        return (this.drawScoreList());

  }
}
