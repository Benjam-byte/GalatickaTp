import React, { Component } from 'react';
import './message.css'





export default class Message extends Component {

    render() {
        return (
            <div className="message">
                <p style={{display : this.props.display}}>{this.props.message}</p>
                <p style={{display : this.props.display2}}>Your score : {this.props.score}</p>
            </div>
        );
    }

}