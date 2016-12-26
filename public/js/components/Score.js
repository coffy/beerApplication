
import React from 'react';
import { render } from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import DetailScore from './DetailScore';







export default class Score extends React.Component {


    handleRemove(){

        var self = this;

        fetch('/score:id',{
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({})
        })
            .then(function(response) {

                return response.json();
            })
            .then(function(json){

                self.setState({ beerList : json});
            });

    };


    handleEdit(){

        var self = this;

        fetch('/score:id',{
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({})
        })
            .then(function(response) {

                return response.json();
            })
            .then(function(json){

                self.setState({ beerList : json});
            });

    };


    render() {
        return (
            <tr id={this.props._id}>
                <td className="beer">{this.props.beer}</td>
                <td className="beerType">{this.props.type}</td>
                <td className="brewery">{this.props.brewery}</td>
                <td className="details">
                    <FlatButton
                        primary={true}
                        onClick={() => {
                            console.log(this.props._id);
                            render(
                                <DetailScore
                                    id ={this.props._id}
                                    beer = {this.props.beer}
                                    aroma = {this.props.aroma}
                                    flavor = {this.props.flavor}
                                    mouthfeel = {this.props.mouthfeel}
                                    appearance = {this.props.appearance}
                                    />
                                ,document.getElementById('beer-tasting-detail'));
                            }
                        }> details
                    </FlatButton>
                </td>
                <td className="delete">
                    <FlatButton
                        primary={true}
                        onClick={() => {
                            this.handleRemove.bind(this);
                         }
                     }> remove
                    </FlatButton>
                </td>
                <td className="edit">
                    <FlatButton
                        primary={true}
                        onClick={() => {
                            this.handleEdit.bind(this);
                        }
                    }> edit
                    </FlatButton>
          </td>
      </tr>
    );
  }
                    }
