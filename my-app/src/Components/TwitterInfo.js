import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

const url = "http://localhost:5000/twitter";

class TwitterInfo extends React.Component {

    constructor() {
        super()

        this.state = {
            text: "There is no news now",
            username: "Username",
        }
    }

    updateNews(data) {
        this.setState({
            text: data.text,
            username: data.user.name
        })

        this.componentDidMount();
    }

    componentDidMount() {

        setInterval(() => {
            fetch(url)
                .then(
                    (res) => res.json()
                ).then(
                    (data) => {
                        this.updateNews(data.data)
                    }
                ).catch(
                    (err) => console.log(err)
                );
        }, 60 * 1000)

    }

    render() {

        return (
            <div className="twitter-wrapper">
                <div>
                    <span><FontAwesomeIcon icon={faTwitterSquare} /></span>
                    <span>Twitter Feed</span>
                    <span>#Australia</span>
                </div>
                <p>
                    <span>@{this.state.username}:</span>
                    <span> {this.state.text}</span>
                </p>
            </div>
        )
    }
};

export default TwitterInfo;