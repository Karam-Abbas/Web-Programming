import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


const Header = ()=>{
    return (<h1>Hello this is header part!</h1>);
};
const Main = ()=>{
    return (<ul>
        <li>For writing better code</li>
        <li>For writing dynamically changeable code</li>
        <li>to split the html into components</li>
    </ul>);
};
const Footer = ()=>{
    return <h3>This is the footer part!</h3>
};
const Content = ()=>{
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
};

ReactDOM.render(<Content />,document.getElementById('root'))



