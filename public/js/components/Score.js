
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
            body: {id: this.props._id}
        })
            .then(function(response) {

                return response.json();
            })
            .then(function(json){

                self.setState({ beerList : json});
            });

    };


    handleEdit(){

        var beerProfile = render(
            <BeerProfileCreate
                id ={this.props._id}
                beer = {this.props.beer}
                type = {this.props.type}
                brewery =  {this.props.type}
                aromaText = {this.props.aroma.text}
                flavorText = {this.props.flavor.text}
                mouthfeelText = {this.props.mouthfeel.text}
                appearanceText = {this.props.appearance.text}
                overallText = {this.props.overall.text}
                aromaValue = {this.props.aroma.value}
                flavorValue = {this.props.flavor.value}
                mouthfeelValue = {this.props.mouthfeel.value}
                appearanceValue = {this.props.appearance.value}
                overallValue = {this.props.overall.value}
            />
            ,document.getElementById('beer-tasting-detail'));

        beerProfile.handleOpenModal();

    };


    handleDetails(){
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
                            this.handleDetails.bind(this);
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
