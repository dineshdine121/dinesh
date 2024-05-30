import { Component } from "react";

export class RealEstateListings extends Component {
    state = {
        propertytype: "land",
        pesron: {
            participants: "100 members",
        },
        location: ["hyderabad"]
    };


    addnewlistings = () => {
        const newstate = { ...this.state };
        newstate.location.push("100");
        this.setState(newstate);
    };
    searchforlistings = () => {
        const newstate = { ...this.state };
        newstate.location.splice(1, 0, "30");
        this.setState(newstate);
    };
    removelistings = () => {
        const newstate = { ...this.state };
        newstate.location.pop();
        this.setState(newstate);
    };

    render() {
        return (
            <div>

                <button onClick={this.addnewlistings}>addnewlistings </button><br /> <br />
                <button onClick={this.searchforlistings}> searchforlistings</button><br /> <br />
                <button onClick={this.removelistings}>removelistings</button> <br /> <br />

                <ul>
                    {this.state.location.map((val) => <li>{val}</li>)}
                </ul>
                <ul>
                    <p>{this.state.pesron.propertytype}</p>
                    <p>{this.state.pesron.price}</p>
                    <p>{this.state.pesron.location}</p>
                </ul>
            </div>
        )
    }
}