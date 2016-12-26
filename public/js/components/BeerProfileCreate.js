

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';


const customContentStyle = {
    width: '99%',
    maxWidth: 'none',
    height: '900px',
    maxHeight: 'none'
};

export default class BeerProfileCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            overallValue: 0,
            aromaValue: 0,
            flavorValue: 0,
            appearanceValue: 0,
            mouthfeelValue: 0
        };

    };



    handleClose(){

        this.setState({open: !this.state.open});
    };

    handleAdd(){

        var self = this;

        fetch('/score',{
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

    handleOpenModal(){

        this.setState({open: true});
    }


    handleOverAllSlider(event, value){

        this.setState({overallValue: value});
    }

    handleAromaSlider(event, value){

        this.setState({aromaValue: value});
    }

    handleFlavorSlider(event, value){

        this.setState({flavorValue: value});
    }

    handleMouthfeelSlider(event, value){

        this.setState({mouthfeelValue: value});
    }

    handleAppearanceSlider(event, value){

        this.setState({appearanceValue: value});
    }

    render() {

        return (
            <MuiTheme>
                <div>
                    <Dialog
                        title="Take your notes"
                        actions={[
                              <FlatButton
                                  label="Cancel"
                                  primary={true}
                                  onClick={() => {this.handleClose()}}
                              />,
                              <FlatButton
                                  label="Add"
                                  primary={true}
                                  onClick ={() => {this.handleAdd()}}
                              />
                         ]}
                        modal={true}
                        open={this.state.open}
                        contentStyle={customContentStyle}
                        autoScrollBodyContent={true}
                    >
                        <div className = 'beer-form-style-div'>
                            <div className = 'col-md-3'>
                                <ul>
                                    <li>
                                        <label>
                                            Beer
                                            <input
                                                className = 'beer-desc-input'
                                                placeholder= "Write the beer&rsquo;s name"
                                                //defaultValue="Bob"
                                                type="text"
                                                ref={(input) => this.input = input} />
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            Style
                                            <input
                                                className = 'beer-desc-input'
                                                placeholder= 'Write the style'
                                                //defaultValue="Bob"
                                                type="text"
                                                ref={(input) => this.input = input} />
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            Brewery
                                            <input
                                                placeholder= 'Who made it'
                                                className = 'beer-desc-input'
                                                defaultValue="Bob"
                                                type="text"
                                                ref={(input) => this.input = input} />
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="container-fluid">

                                <div className = 'col-md-3'>
                                    <div className="value-beer-style slider-value"> {this.state.aromaValue}</div>
                                    <label>
                                        Aroma
                                    </label>
                                    <textarea
                                        placeholder= 'What is the aroma you feel?'
                                        defaultValue={this.props.AromaText}
                                        rows = {3}
                                        ref={(input) => this.input = input} />
                                    <Slider
                                        style={{width: '100%'}}
                                        defaultValue=  {this.props.aromaValue}
                                        value={this.state.aromaValue}
                                        onChange={this.handleAromaSlider.bind(this)}
                                        max = {12}
                                        step= {1}
                                    />

                                </div>
                                <div className = 'col-md-3'>
                                    <div className="value-beer-style slider-value"> {this.state.flavorValue}</div>
                                    <label>
                                        Flavor
                                    </label>
                                    <textarea
                                        placeholder= 'How does it taste?'
                                        rows = {3}
                                        defaultValue={this.props.flavorText}
                                        ref={(input) => this.input = input} />
                                    <Slider
                                        style={{width: '100%'}}
                                        defaultValue={this.props.flavorValue}
                                        value={this.state.flavorValue}
                                        onChange={this.handleFlavorSlider.bind(this)}
                                        max = {20}
                                        step= {1}
                                    />

                                </div>
                                <div className = 'col-md-3'>
                                    <div className="value-beer-style slider-value"> {this.state.mouthfeelValue}</div>
                                    <label>
                                        Mouthfeel
                                    </label>
                                    <textarea
                                        placeholder= 'How does it make you feel?'
                                        rows = {3}
                                        defaultValue={this.props.mouthfeelText}
                                        ref={(input) => this.input = input} />
                                    <Slider
                                        style={{width: '100%'}}
                                        defaultValue={this.props.mouthfeelValue}
                                        value={this.state.mouthfeelValue}
                                        onChange={this.handleMouthfeelSlider.bind(this)}
                                        max = {5}
                                        step= {1}
                                    />
                                </div>
                                <div className = 'col-md-3'>
                                    <div className="value-beer-style slider-value"> {this.state.appearanceValue}</div>
                                    <label>
                                        Appearance
                                    </label>
                                    <textarea
                                        placeholder= 'What does it look like?'
                                        rows = {3}
                                        defaultValue={this.props.appearanceText}
                                        ref={(input) => this.input = input} />
                                    <Slider
                                        style={{width: '100%'}}
                                        defaultValue={this.props.appearanceValue}
                                        value={this.state.appearanceValue}
                                        onChange={this.handleAppearanceSlider.bind(this)}
                                        max = {3}
                                        step= {1}
                                    />

                                </div>
                                <div className = 'col-md-3'>
                                    <div className="value-beer-style slider-value"> {this.state.overallValue || 0}</div>
                                    <label>
                                        Overall
                                    </label>
                                    <textarea
                                        placeholder= 'How do you evaluate it at the end?'
                                        defaultValue={this.props.overallText}
                                        rows = {3}
                                        ref={(input) => this.input = input} />
                                    <Slider
                                        style={{width: '100%'}}
                                        defaultValue={this.props.overallValue}
                                        value={this.state.overallValue}
                                        onChange={this.handleOverAllSlider.bind(this)}
                                        max = {10}
                                        step= {1}
                                    />


                                </div>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </MuiTheme>
        );
    }
}

