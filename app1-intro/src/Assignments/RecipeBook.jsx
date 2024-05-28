import { Component } from "react";

export class RecipeBook extends Component {
    state = {
        posttittle: "rc",
        pesron: {
          ingredients:"salt",
        },
        instructions: ["love", "care"]
    };


    addnewrecipes = () => {
        const newstate = { ...this.state };
        newstate.instructions.push("s,e,f");
        this.setState(newstate);
    };
    removerecipes = () => {
        const newstate = { ...this.state };
        newstate.instructions.splice(1, 0, "jan");
        this.setState(newstate);
    };
    searchforrecipes = () => {
        const newstate = { ...this.state };
        newstate.instructions.pop();
        this.setState(newstate);
    };

    render() {
        return (
            <div>

                <button onClick={this.addnewrecipes}>addnewrecipes</button>
                <button onClick={this.removerecipes}>removerecipes</button>
                <button onClick={this.searchforrecipes}>searchforrecipes</button>

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