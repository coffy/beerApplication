
import React from 'react';
import { render } from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import DetailScore from './DetailScore';

//beer-tasting-detail

export default class Score extends React.Component {
  render() {
    return (
      <tr id={this.props.id}>
          <td className="beer">{this.props.beer}</td>
          <td className="beerType">{this.props.type}</td>
          <td className="brewery">{this.props.brewery}</td>
          <td className="details">
              <FlatButton
                  primary={true}
                  onClick={() => {
                    console.log(this.props.id);
                    render(
                        <DetailScore
                            id ={this.props.id}
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
      </tr>
    );
  }
}
