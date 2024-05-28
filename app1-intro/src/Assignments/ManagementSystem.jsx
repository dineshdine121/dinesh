import { Component } from "react";

export class ManagementSystem extends Component {
    state = {
        quantityavailable: "1",
        pesron: {
          productname:"cycle",
        },
       price: ["300","400"]
    };


    addnewproducts = () => {
        const newstate = { ...this.state };
        newstate.price.push("bike");
        this.setState(newstate);
    };
    updatequantities= () => {
        const newstate = { ...this.state };
        newstate.price.splice(1, 0, "20");
        this.setState(newstate);
    };
    removeproducts = () => {
        const newstate = { ...this.state };
        newstate.price.pop();
        this.setState(newstate);
    };

    render() {
        return (
            <div>

                <button onClick={this.addnewproducts}>addnewproducts</button>
                <button onClick={this.updatequantities}>updatequantities</button>
                <button onClick={this.removeproducts}>removeproducts</button>

                <ul>
                    {this.state.price.map((val) => <li>{val}</li>)}
                </ul>
                <ul>
                    <p>{this.state.pesron.productname}</p>
                    <p>{this.state.pesron.price}</p>
                </ul>
            </div>
        )
    }
}