import { Component } from "react";

export class CalanderAppointments extends Component {
    state = {
        eventname: "sai events",
        pesron: {
          Date:"20",
        },
        location: ["chittoor"]
    };


    addnewappointments= () => {
        const newstate = { ...this.state };
        newstate.location.push("kurnool");
        this.setState(newstate);
    };
    removerecipes = () => {
        const newstate = { ...this.state };
        newstate.location.splice(1, 0, "jan");
        this.setState(newstate);
    };
    deleteappointments = () => {
        const newstate = { ...this.state };
        newstate.location.pop();
        this.setState(newstate);
    };

    render() {
        return (
            <div>

                <button onClick={this.addnewappointments}>addnewappointments</button>
                <button onClick={this.updateappointments}>updateappointments</button>
                <button onClick={this.deleteappointments}>deleteappointments</button>

                <ul>
                    {this.state.location.map((val) => <li>{val}</li>)}
                </ul>
                <ul>
                    <p>{this.state.pesron.eventname}</p>
                    <p>{this.state.pesron.Date}</p>
                </ul>
            </div>
        )
    }
}