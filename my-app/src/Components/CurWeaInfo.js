import React from 'react';

class CurWeaInfo extends React.Component {

    render() {
        return (
            <div className="city_wea flex-item">
                <p className="wea_info_temp">{this.props.temp} °</p>
                <p className="wea_info_weather">{this.props.weather.toUpperCase()}</p>
                <div className="hs_info_wrapper flex-container">
                    <div className="flex-item wea_hum">
                        <p>HUMIDITY</p>
                        <br></br>
                        <p className="wea_info_humid">{this.props.humidity} %</p>
                    </div>
                    <div className="flex-item wea_wind">
                        <p>WIND</p>
                        <br></br>
                        <p className="wea_info_w_speed">{this.props.wind_speed} K/M</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurWeaInfo;