import React from 'react';
import { render } from 'react-dom';
import Init from './components/Init';



window.onload = () => {


    render(<Init/>
        ,document.getElementById('react-app'));
};
