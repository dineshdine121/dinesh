import { Component } from "react";

export class GameCharacter extends Component {
    state = {
        name: "dine",
        pesron: {
          level:"1",
        },
       healthpoints: ["20","28"]
    };


    attack = () => {
        const newstate = { ...this.state };
        newstate.healthpoints.push("2");
        this.setState(newstate);
    };
    defend= () => {
        const newstate = { ...this.state };
        newstate.healthpoints.splice(1, 0, "5");
        this.setState(newstate);
    };
    levelup= () => {
        const newstate = { ...this.state };
        newstate.healthpoints.pop();
        this.setState(newstate);
    };

    render() {
        return (
            <div>

                <button onClick={this.attack}>attack</button> <br /> <br />
                <button onClick={this.defend}>defend</button><br /> <br />
                <button onClick={this.levelup}>levelup</button><br /> <br />

                <ul>
                    {this.state.healthpoints.map((val) => <li>{val}</li>)}
                </ul>
                <ul>
                    <p>{this.state.pesron.productname}</p>
                    <p>{this.state.pesron.price}</p>
                    <p>{this.state.pesron.healthpoints}</p>
                </ul>
            </div>
        )
    }
}