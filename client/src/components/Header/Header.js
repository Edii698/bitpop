import React from "react";
import "./Header.css";
import { Carousel, Button, Icon } from 'react-materialize'

const Header = () =>(
    <div>
        <div className='' s={12}>
            <div className="center-align" id="pg-header">
                    <h2 className="slide-info">Some Text here</h2>
                    <p className='white-text'>More info here. And more here.</p>
                    <Button waves='light' className="#03a9f4 light-blue">Create Your Character Now!<Icon left>brush</Icon></Button>      
            </div>
        </div>
        <div className="#1de9b6 teal accent-3 center-align" id="hm-bar">
            <h3 className="title-txt">Your Art, Fast, Easy, Fun!</h3>
        </div>
    </div>    
);

export default Header;