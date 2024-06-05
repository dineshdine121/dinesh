import { Component } from "react";

export class FitnessChallengeTracker extends Component {
    state = {
        challengename: "do or die",
        pesron: {
            participants: "20 members",
        },
        startdate: ["10/3/2000"],
        enddate:["20/3/2001"]
    };


    joinchallenges = () => {
        const newstate = { ...this.state };
        newstate. startdate.push("100");
        this.setState(newstate);
    };
    declarewinners = () => {
        const newstate = { ...this.state };
        newstate.startdate.splice(1, 0, "30");
        this.setState(newstate);
    };
    trackprogress= () => {
        const newstate = { ...this.state };
        newstate.startdate.pop();
        this.setState(newstate);
    };

    render() {
        return (
            <div>

                <button onClick={this.joinchallenges}>joinchallenges</button><br /> <br /> 
                <button onClick={this.declarewinners}>declarewinners</button><br /> <br />
                <button onClick={this.trackprogress}>trackprogress</button> <br /> <br />

                <ul>
                    {this.state. startdate.map((val) => <li>{val}</li>)}
                </ul>
                <ul>
                    <p>{this.state.pesron.challengename}</p>
                    <p>{this.state.pesron.participants}</p>
                    <p>{this.state.pesron. startdate}</p>
                    <p>{this.state.pesron.enddate}</p>
                </ul>
            </div>
        )
    }
}