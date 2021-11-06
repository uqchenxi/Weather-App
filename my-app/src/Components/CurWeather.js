import React from 'react';
import CurWeaInfo from './CurWeaInfo';
import Sydney from './../image/Sydney.jpg';
import Beijing from './../image/Beijing.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// const url = "http://localhost:5000";

class CurWeather extends React.Component {


    render() {

        const sydStyle = {
            backgroundImage: `url(${Sydney})`
        }

        const beiStyle = {
            backgroundImage: `url(${Beijing})`
        }

        // const {isSydney} = this.props;

        let myStyle;

        if (this.props.cityName === "SYDNEY") {
            myStyle = sydStyle;
        }else{
            myStyle = beiStyle;
        }

        return (
            
            <div className="cur_wea_wrapper flex-container" style={myStyle}>
                <div className="city_name_wrapper flex-item">
                    <div className="city_name">
                        <span><a onClick={this.props.onClick}><FontAwesomeIcon icon={faChevronLeft} /></a></span>
                        &nbsp;{this.props.cityName}&nbsp;
                        <span><a onClick={this.props.onClick}><FontAwesomeIcon icon={faChevronRight} /></a></span>
                    </div>
                </div>
                <CurWeaInfo
                    temp={this.props.cityTemp}
                    weather={this.props.cityWeather}
                    humidity={this.props.cityHumid}
                    wind_speed={this.props.cityWSpeed}
                />
            </div>
        )
    }
}

export default CurWeather;