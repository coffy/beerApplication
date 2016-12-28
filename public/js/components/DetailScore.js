
import React from 'react';
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import DetailCard from './DetailCard';



export default class DetailScore extends React.Component {

    render() {
        return (
            <MuiTheme>
                <div>
                    <h4 className='beer-profile-detail'>{this.props.beer} <i className="logo-beer-icon"></i> <small> Beer tasting profile </small></h4>
                    <div>
                        <DetailCard
                            title = 'Aroma'
                            text = {this.props.aroma.text}
                            value = {this.props.aroma.value}
                            maxValue = {12}
                        />
                        <DetailCard
                            title = 'Flavor'
                            text = {this.props.flavor.text}
                            value = {this.props.flavor.value}
                            maxValue = {20}
                        />
                        <DetailCard
                            title = 'Mouthfeel'
                            text = {this.props.mouthfeel.text}
                            value = {this.props.mouthfeel.value}
                            maxValue = {5}
                        />
                        <DetailCard
                            title = 'Apperance'
                            text = {this.props.appearance.text}
                            value = {this.props.appearance.value}
                            maxValue = {3}
                        />

                        <DetailCard
                            title = 'Overall'
                            text = {this.props.overall.text}
                            value = {this.props.overall.value}
                            maxValue = {10}
                        />
                    </div>
                </div>
            </MuiTheme>
        );
    }
}
