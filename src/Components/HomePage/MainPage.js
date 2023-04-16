import React, { Component } from 'react';
import "./MainPage.css";
import AdvertismentOne from './AdvertismentOne/AdvertismentOne';
import AdvertismentFour from './AdvertismentFour/AdvertismentFour';
import LongAdvertisment from './LongAdvertisment/LongAdvertisment';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className='mainpage'>
                <div style={{paddingTop: "260px", display: "flex", flexWrap: "wrap"}}>
                    <AdvertismentOne/>
                    <AdvertismentFour/>
                    <AdvertismentOne/>
                    <AdvertismentOne/>
                    <AdvertismentOne/>
                    <AdvertismentFour/>
                    <AdvertismentFour/>
                    <AdvertismentOne/>
                    <br/>
                    <LongAdvertisment/>

                </div>
            </div>
          );
    }
}
 
export default MainPage;

