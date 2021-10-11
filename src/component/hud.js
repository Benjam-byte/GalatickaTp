import React, { Component} from 'react';
import './hud.css';




export default class Hud extends Component {


    render() {
        return (
            <div className="hud">
                <div id="score">
                    <p>Score : {this.props.score} </p>
                    <p>Vie : {this.props.vie}</p>
                </div>
            </div>
        );
    }

}