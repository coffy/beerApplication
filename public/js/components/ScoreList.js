
import React from 'react';
import Score from './Score';

const lst = [
  {
    id: '34',
    beer: 'Winter Ipa',
    brewery: 'Buxton brewery',
    type: 'Red IPA',
    aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
    flavor :{text: 'pine hop flavor with hazelnuts', value:3},
    mouthfeel :{text: 'balanced flavor with bittering, creamy flavor', value: 3},
    appearance :{text: 'good red color, not persistent head', value: 2}
  },
  {
    id: '35',
    beer: 'Saison du Japan',
    brewery: 'Hitachino nest',
    type: 'Rice Saison',
    aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
    flavor :{text: 'pine hop flavor with hazelnuts', value:3},
    mouthfeel :{text: 'balanced flavor with bittering', value: 3},
    appearance :{text: 'good red color, not persistent head', value: 2}
  },
  {
    id: '36',
    beer: 'Passion Tang',
    brewery: 'Lervig',
    type: 'Sour',
    aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
    flavor :{text: 'pine hop flavor with hazelnuts', value:3},
    mouthfeel :{text: 'balanced flavor with bittering', value: 3},
    appearance :{text: 'good red color, not persistent head', value: 2}
  },
    {
        id: '341',
        beer: 'Winter Ipa',
        brewery: 'Buxton brewery',
        type: 'Red IPA',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering, creamy flavor', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '351',
        beer: 'Saison du Japan',
        brewery: 'Hitachino nest',
        type: 'Rice Saison',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '361',
        beer: 'Passion Tang',
        brewery: 'Lervig',
        type: 'Sour',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '342',
        beer: 'Winter Ipa',
        brewery: 'Buxton brewery',
        type: 'Red IPA',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering, creamy flavor', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '352',
        beer: 'Saison du Japan',
        brewery: 'Hitachino nest',
        type: 'Rice Saison',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '362',
        beer: 'Passion Tang',
        brewery: 'Lervig',
        type: 'Sour',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '344',
        beer: 'Winter Ipa',
        brewery: 'Buxton brewery',
        type: 'Red IPA',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering, creamy flavor', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '354',
        beer: 'Saison du Japan',
        brewery: 'Hitachino nest',
        type: 'Rice Saison',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '364',
        beer: 'Passion Tang',
        brewery: 'Lervig',
        type: 'Sour',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },  {
        id: '346',
        beer: 'Winter Ipa',
        brewery: 'Buxton brewery',
        type: 'Red IPA',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering, creamy flavor', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '356',
        beer: 'Saison du Japan',
        brewery: 'Hitachino nest',
        type: 'Rice Saison',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '366',
        beer: 'Passion Tang',
        brewery: 'Lervig',
        type: 'Sour',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '345',
        beer: 'Winter Ipa',
        brewery: 'Buxton brewery',
        type: 'Red IPA',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering, creamy flavor', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '355',
        beer: 'Saison du Japan',
        brewery: 'Hitachino nest',
        type: 'Rice Saison',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '365',
        beer: 'Passion Tang',
        brewery: 'Lervig',
        type: 'Sour',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '347',
        beer: 'Winter Ipa',
        brewery: 'Buxton brewery',
        type: 'Red IPA',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering, creamy flavor', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '357',
        beer: 'Saison du Japan',
        brewery: 'Hitachino nest',
        type: 'Rice Saison',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    },
    {
        id: '367',
        beer: 'Passion Tang',
        brewery: 'Lervig',
        type: 'Sour',
        aroma: {text: 'hazelnuts aroma, with some notes of black berries', value:8},
        flavor :{text: 'pine hop flavor with hazelnuts', value:3},
        mouthfeel :{text: 'balanced flavor with bittering', value: 3},
        appearance :{text: 'good red color, not persistent head', value: 2}
    }
];

export default class ScoreList extends React.Component {

  render(){

      return <div className='table-beer-margin'>
          <div className='col-md-1'></div>
          <div className='col-md-5'>
              <table className='home table table-hover'>
                  <thead>
                  <tr>
                      <th> Beer </th>
                      <th> Type </th>
                      <th> Brewery </th>
                      <th>  </th>
                  </tr>
                  </thead>
                  <tbody>
                  {lst.map(lstData =>  <Score key={lstData.id} {...lstData} />)}
                  </tbody>
              </table>
          </div>
          <div className='col-md-5' id='beer-tasting-detail'>
          </div>
          <div className='col-md-1'></div>
      </div>;
  }
}
