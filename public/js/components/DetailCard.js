
import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';


export default class DetailCard extends React.Component {


    render() {
        return (
            <div style={{margin: '6px'}}>
                <div id = {'beer-' + this.props.title} className="value-beer-style complex-value"> {this.props.value}&#47;<sub>{this.props.maxValue}</sub> </div>
                <Card>
                    <CardHeader
                        title={this.props.title}
                    />
                    <CardText> {this.props.text} </CardText>
                </Card>
            </div>
        );
    }
}
