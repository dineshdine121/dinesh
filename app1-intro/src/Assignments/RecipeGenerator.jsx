import { Component } from "react";

export class RecipeGenerator extends Component {
    state = {
        title: "dine",
        pesron: {
          ingredients:"salt",
        },
        instructions: ["sugar", "catch"]
    };


    generatenewrecipes = () => {
        const newstate = { ...this.state };
        newstate.instructions.push("tea,coffee");
        this.setState(newstate);
    };
    render() {
        return (
            <div>

                <button onClick={this.generatenewrecipes}>generatenewrecipes</button><br /><br />
                <ul>
                    {this.state.instructions.map((val) => <li>{val}</li>)}
                </ul>
                <ul>
                    <p>{this.state.pesron.instructions}</p>
                    <p>{this.state.pesron.ingredients}</p>
                </ul>
            </div>
        )
    }
}