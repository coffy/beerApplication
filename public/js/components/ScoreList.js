
import React from 'react';
import Score from './Score';
import 'whatwg-fetch';

export default class ScoreList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            beerList:[]
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

                self.setState({ beerList : json});
            });



    };


    drawScoreList(){

       let html = <div className='table-beer-margin'>
            <div className='col-md-5'>
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
                    {this.state.beerList.map(lstData =>  <Score key={lstData._id} {...lstData} />)}
                    </tbody>
                </table>
            </div>
            <div className='col-md-5' id='beer-tasting-detail'>
            </div>
        </div>;

        let htmlEmpty = <div className='table-beer-margin-empty'>
            no beer tasting yet
        </div>;

        if(this.state.beerList.length > 0){
            return html;
        }else{
            return htmlEmpty;
        }

    }



    render(){

      return this.drawScoreList();
  }
}
