import { Component } from "react";

export class FlightBookingSystem extends Component {
    state = {
        flightnumber: "frt123",
        pesron: {
            departurecity: "goa",
        },
        arrivalcity: ["chittoor"],
        departuretime:["2:40"]
    };


    bookflights = () => {
        const newstate = { ...this.state };
        newstate.departuretime.push("flyair");
        this.setState(newstate);
    };
    cancelflight = () => {
        const newstate = { ...this.state };
        newstate.departuretime.pop();
        this.setState(newstate);
    };
    checkavailability= () => {
        const newstate = { ...this.state };
        newstate.departuretime.splice(1, 0, "1000");
        this.setState(newstate);
    };

    render() {
        return (
            <div>

                <button onClick={this.bookflights}>bookflights</button><br /> <br /> 
                <button onClick={this.cancelflight}>cancelflight</button><br /> <br />
                <button onClick={this.checkavailability}>checkavailability</button> <br /> <br />

                <ul>
                    {this.state.departuretime.map((val) => <li>{val}</li>)}
                </ul>
                <ul>
                    <p>{this.state.pesron.flightnumber}</p>
                    <p>{this.state.pesron. departurecity}</p>
                    <p>{this.state.pesron.arrivalcity}</p>
                    <p>{this.state.pesron.departuretime}</p>
                </ul>
            </div>
        )
    }
}