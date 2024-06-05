import { Component } from "react";

export class MusicBandManager extends Component {
    state = {
        bandmembers: "20",
        pesron: {
            upcominggigs: "dance",
        },
        setlist: ["2"]
    };


    addmembers = () => {
        const newstate = { ...this.state };
        newstate.setlist.push("pavan","kiran");
        this.setState(newstate);
    };
    schedulegigs = () => {
        const newstate = { ...this.state };
        newstate.setlist.pop();
        this.setState(newstate);
    };
    updatethesetlist = () => {
        const newstate = { ...this.state };
        newstate.setlist.splice(1, 0, "7");
        this.setState(newstate);
    };

    render() {
        return (
            <div>

                <button onClick={this.addmembers}>addmembers</button> <br /> <br />
                <button onClick={this. schedulegigs}>schedulegigs</button><br /> <br />
                <button onClick={this.updatethesetlist}>updatethesetlist</button><br /> <br />

                <ul>
                    {this.state.setlist.map((val) => <li>{val}</li>)}
                </ul>
                <ul>
                    <p>{this.state.pesron.bandmembers}</p>
                    <p>{this.state.pesron.upcominggigs}</p>
                    <p>{this.state.pesron.setlist}</p>
                </ul>
            </div>
        )
    }
}