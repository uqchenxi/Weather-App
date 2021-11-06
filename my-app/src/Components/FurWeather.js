import React from 'react';
import FurWeaInfo from './FurWeaInfo';
import TwitterInfo from './TwitterInfo';

class FurWeather extends React.Component {

    render() {
        return (
            <div className="fu_wea_wrapper flex-container">
                <TwitterInfo/>
                <FurWeaInfo
                    cityName={this.props.cityName}
                    cityLat={this.props.cityLat}
                    cityLon={this.props.cityLon}
                />
            </div>
        )
    }
}

export default FurWeather;