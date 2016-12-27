

import React from 'react';
import { render } from 'react-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import ScoreList from './ScoreList';


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
            disable: true,
            overallValue: 0,
            aromaValue: 0,
            flavorValue: 0,
            appearanceValue: 0,
            mouthfeelValue: 0
        };

    };


    componentWillMount(){

        var self = this;

        if(this.props.id){

            this.setState({
                overallValue: this.props.overallValue,
                aromaValue: this.props.aromaValue,
                flavorValue: this.props.flavorValue,
                appearanceValue: this.props.appearanceValue,
                mouthfeelValue: this.props.mouthfeelValue
            })
        }


    };



    handleClose(){

        this.setState({open: !this.state.open});
    };

    handleAdd(){

        var self = this;

        let json = {
            beer: this.state.beer,
            type: this.state.type,
            brewery: this.state.brewery,
            overallText: this.state.overallText,
            aromaText: this.state.aromaText,
            flavorText: this.state.flavorText,
            appearanceText: this.state.appearanceText,
            mouthfeelText: this.state.mouthfeelText,
            overallValue: this.state.overallValue,
            aromaValue: this.state.aromaValue,
            flavorValue: this.state.flavorValue,
            appearanceValue: this.state.appearanceValue,
            mouthfeelValue: this.state.mouthfeelValue
        };

        if(this.props._id){
            this.editOp(json);
        }else{
            this.addOp(json);

        }


    };

    addOp(json){

        fetch('/score',{
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(json)
        })
            .then(function(response) {

                return response.json();
            })
            .then(function(lstBeers){

                render(<ScoreList loadedBeers={lstBeers}/>, document.getElementById('react-app'));
            });
    }


    editOp(json){

        fetch('/score/'+this.props._id,{
            method: 'UPDATE',
            body: JSON.stringify(json)
        })
            .then(function(response) {

                return response.json();
            })
            .then(function(lstBeers){

                render(<ScoreList loadedBeers={lstBeers}/>, document.getElementById('react-app'));
            });
    }

    handleOpenModal(){

        this.setState({open: true});
    }


    handleBeerChange(event, value){

        var disable = true;
        if(value !== ''){
            disable = false;
        }

        this.setState({
            beer: value,
            disable: disable
        })
    }
    handleBeerTypeChange(event, value){
        this.setState({type: value})
    }
    handleBreweryChange(event, value){
        this.setState({brewery: value})
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



    handleMouthfeelInputChange(event, value){

        this.setState({mouthfeelText: value});
    }

    handleFlavorInputChange(event, value){

        this.setState({flavorText: value});
    }

    handleAromaInputChange(event, value){

        this.setState({aromaText: value});
    }

    handleAppearanceInputChange(event, value){

        this.setState({appearanceText: value});
    }

    handleOverallInputChange(event, value){

        this.setState({overallText: value});
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

                                  onClick={() => {this.handleClose()}}
                              />,
                              <FlatButton
                                  label="Add"
                                  disabled = {this.state.disable}
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
                                                defaultValue={this.props.beer}
                                                onChange={this.handleBeerChange.bind(this)}
                                                type='text'
                                            />
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            Style
                                            <input
                                                className = 'beer-desc-input'
                                                placeholder= 'Write the style'
                                                defaultValue={this.props.type}
                                                onChange={this.handleBeerTypeChange.bind(this)}
                                                type='text'
                                            />
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            Brewery
                                            <input
                                                placeholder= 'Who made it'
                                                className = 'beer-desc-input'
                                                defaultValue={this.props.brewery}
                                                onChange={this.handleBreweryChange.bind(this)}
                                                type='text'
                                            />
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
                                        defaultValue={this.props.aromaText}
                                        rows = {3}
                                        onChange={this.handleAromaInputChange.bind(this)}
                                    />
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
                                        onChange={this.handleFlavorInputChange.bind(this)}
                                        />
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
                                        onChange={this.handleMouthfeelInputChange.bind(this)}
                                    />
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
                                        onChange={this.handleAppearanceInputChange.bind(this)}
                                    />
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
                                        onChange={this.handleOverallInputChange.bind(this)}
                                    />
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

