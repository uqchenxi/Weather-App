import React from 'react';
import Axios from 'axios';
import FurWeaImg from './FurWeaImg';


class FurWeaInfo extends React.Component {

    constructor() {
        super()

        this.state = {
            daysArr: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
            city: "SYDNEY",
            lat: -33.865143,
            lon: 151.209900,
            days: [],
            weather: [],
            tempsArr: []
        }
    }

    updateCity = async () => {
        let url = `http://localhost:5000/${this.state.city.toLowerCase()}`;
        let raw_res = await Axios(url);
        const res = raw_res.data;

        this.setState({
            weather: [],
            tempsArr: []
        })

        for (var i = 0; i < 5; i++) {
            const wea = res.data.daily[i + 1].weather[0].main;
            const temp = (res.data.daily[i + 1].temp.day - 273).toFixed(2);
            this.setState({
                weather: [...this.state.weather, wea],
                tempsArr: [...this.state.tempsArr, temp]
            })
        }
    }

    async componentDidMount() {

        setInterval(async () => {

            let url = `http://localhost:5000/${this.state.city.toLowerCase()}`;
            let raw_res = await Axios(url);

            const res = raw_res.data;

            for (var i = 0; i < 5; i++) {
                const day = new Date(res.data.daily[i + 1].dt * 1000).getDay();
                const wea = res.data.daily[i + 1].weather[0].main;
                const temp = (res.data.daily[i + 1].temp.day - 273).toFixed(2);
                this.setState({
                    days: [...this.state.days, day],
                    weather: [...this.state.weather, wea],
                    tempsArr: [...this.state.tempsArr, temp]
                })
            }

        }, 5 * 1000)


    }


    componentWillReceiveProps(nextProps) {
        if (this.props.cityName != nextProps.cityName) {
            this.setState({
                city: nextProps.cityName,
                lat: nextProps.cityLat,
                lon: nextProps.cityLon
            })

        }
        this.updateCity()
    }


    render() {

        return (
            <div className="five_days_wrapper flex-item flex-container">
                <div className="day1_wrapper">
                    <p>{this.state.daysArr[this.state.days[0]]}</p>
                    <FurWeaImg
                        weather={this.state.weather[0]}
                    />
                    <p>{this.state.tempsArr[0]} °</p>
                    <p>{this.state.weather[0]}</p>
                </div>
                <div className="day2_wrapper">
                    <p>{this.state.daysArr[this.state.days[1]]}</p>
                    <FurWeaImg
                        weather={this.state.weather[1]}
                    />
                    <p>{this.state.tempsArr[1]} °</p>
                    <p>{this.state.weather[1]}</p>
                </div>
                <div className="day3_wrapper">
                    <p>{this.state.daysArr[this.state.days[2]]}</p>
                    <FurWeaImg
                        weather={this.state.weather[2]}
                    />
                    <p>{this.state.tempsArr[2]} °</p>
                    <p>{this.state.weather[2]}</p>
                </div>
                <div className="day4_wrapper">
                    <p>{this.state.daysArr[this.state.days[3]]}</p>
                    <FurWeaImg
                        weather={this.state.weather[3]}
                    />
                    <p>{this.state.tempsArr[3]} °</p>
                    <p>{this.state.weather[3]}</p>
                </div>
                <div className="day5_wrapper">
                    <p>{this.state.daysArr[this.state.days[4]]}</p>
                    <FurWeaImg
                        weather={this.state.weather[4]}
                    />
                    <p>{this.state.tempsArr[4]} °</p>
                    <p>{this.state.weather[4]}</p>
                </div>
            </div>
        )

    }
}

export default FurWeaInfo;