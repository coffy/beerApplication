
import React from 'react';
import { render } from 'react-dom';
import IconButton from 'material-ui/IconButton';
import DetailScore from './DetailScore';
import ScoreList from './ScoreList';
import BeerProfileCreate from './BeerProfileCreate'







export default class Score extends React.Component {


    handleRemove(){

        var self = this;

        fetch('/score/'+this.props._id,{
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(
                {_id:this.props._id}
            )
        })
            .then(function(response) {

                return response.json();
            })
            .then(function(lstBeers){
               render(<ScoreList loadedBeers={lstBeers}/>, document.getElementById('react-app'));
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
                overall = {this.props.overall}
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
                    <IconButton
                        tooltipPosition="bottom-center"
                        tooltip="Check tasting details"
                        onClick={
                            this.handleDetails.bind(this)
                        }> <i className="material-icons">remove_red_eye</i>
                    </IconButton>
                </td>
                <td className="delete">
                    <IconButton
                        tooltipPosition="bottom-center"
                        tooltip="Delete tasting"
                        onClick={
                            this.handleRemove.bind(this)
                     }> <i className="material-icons">delete</i>
                    </IconButton>
                </td>
                <td className="edit">
                    <IconButton
                        tooltipPosition="bottom-center"
                        tooltip="Edit tasting"
                        onClick={
                            this.handleEdit.bind(this)
                    }>
                        <i className="material-icons">mode_edit</i>
                    </IconButton>
                </td>
            </tr>
        );
    }
}
