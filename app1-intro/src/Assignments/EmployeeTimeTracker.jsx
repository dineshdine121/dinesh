import { Component } from "react";

export class EmployeeTimeTracker extends Component {
    state = {
        employeename: "dine",
        pesron: {
            Date: "5/2/1947",
        },
        starttime: ["2:20"],
        endtime:["3:40"]
    };


    clockin = () => {
        const newstate = { ...this.state };
        newstate.starttime.push("2");
        this.setState(newstate);
    };
    clockout = () => {
        const newstate = { ...this.state };
        newstate.starttime.pop();
        this.setState(newstate);
    };
    calculatetotalhoursworked= () => {
        const newstate = { ...this.state };
        newstate.starttime.splice(1, 0, "12");
        this.setState(newstate);
    };

    render() {
        return (
            <div>

                <button onClick={this.clockin}>clockin</button><br /> <br /> 
                <button onClick={this.clockout}>clockout</button><br /> <br />
                <button onClick={this.calculatetotalhoursworked}>calculatetotalhoursworked</button> <br /> <br />

                <ul>
                    {this.state.starttime.map((val) => <li>{val}</li>)}
                </ul>
                <ul>
                    <p>{this.state.pesron.employeename}</p>
                    <p>{this.state.pesron.Date}</p>
                    <p>{this.state.pesron.starttime}</p>
                    <p>{this.state.pesron.endtime}</p>
                </ul>
            </div>
        )
    }
}