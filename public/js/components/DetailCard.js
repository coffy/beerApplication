
import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

//beer-tasting-detail

export default class DetailCard extends React.Component {


    render() {
        return (
            <div style={{margin: '6px'}}>
                <div id = {'beer-' + this.props.title} className="value-beer-style"> {this.props.value} <sub> &#47;{this.props.maxValue} </sub> </div>
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
