import React from 'react';
import { render } from 'react-dom';
import Init from './components/Init';
import ScoreList from './components/ScoreList';



window.onload = () => {


    render(<Init/>
        ,document.getElementById('react-app'));


    render(<ScoreList/>
        ,document.getElementById('score-list-component'));
};



