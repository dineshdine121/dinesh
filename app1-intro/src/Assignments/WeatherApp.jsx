import { Component } from "react";

export class WeatherApp extends Component {
    state = {
        temperature: "20+",
        pesron: {
            humidity:"3",
        },
        windspeed: ["40-"]
    };


    updateweatherdata= () => {
        const newstate = { ...this.state };
        newstate.windspeed.push("47");
        this.setState(newstate);
    };
    render() {
        return (
            <div>

                <button onClick={this.updateweatherdata}>updateweatherdata</button> <br /> <br />

                <ul>
                    {this.state.windspeed.map((val) => <li>{val}</li>)}
                </ul>
                <ul>
                    <p>{this.state.pesron.temperature}</p>
                    <p>{this.state.pesron.humidity}</p>
                    <p>{this.state.pesron.priority}</p>
                </ul>
            </div>
        )
    }
}