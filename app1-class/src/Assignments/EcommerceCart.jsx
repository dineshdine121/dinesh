import { Component } from "react";

export class EcommerceCart extends Component {
    state = {
        items: "jower",
        pesron: {
          quintity:"30",
        },
       price: ["20"]
    };


    additems = () => {
        const newstate = { ...this.state };
        newstate.price.push("2");
        this.setState(newstate);
    };
    removeitems= () => {
        const newstate = { ...this.state };
        newstate.price.pop();
        this.setState(newstate);
    };
    levelup= () => {
        const newstate = { ...this.state };
        newstate.price.splice( 1, 0, "5");
        this.setState(newstate);
    };

    render() {
        return (
            <div>

                <button onClick={this.additems}>additems</button><br /> <br />
                <button onClick={this. removeitems}>removeitems</button><br /> <br />
                <button onClick={this.levelup}>levelup</button><br /><br />

                <ul>
                    {this.state.price.map((val) => <li>{val}</li>)}
                </ul>
                <ul>
                    <p>{this.state.pesron.items}</p>
                    <p>{this.state.pesron.quintity}</p>
                    <p>{this.state.pesron.price}</p>
                </ul>
            </div>
        )
    }
}