import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';

class FurWeaImg extends React.Component {

    render() {
        if(this.props.weather === "Rain"){
            return (
                <span><FontAwesomeIcon icon={faCloudShowersHeavy} /></span>
            )
        }else if(this.props.weather === "Clear"){
            return (
                <span><FontAwesomeIcon icon={faSun} /></span>
            )
        }else if(this.props.weather === "Clouds"){
            return (
                <span><FontAwesomeIcon icon={faCloudSun} /></span>
            )
        }else{
            return (
                <p>Other logo</p>
            )
        }
        
    }

};

export default FurWeaImg;