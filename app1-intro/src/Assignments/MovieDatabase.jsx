import { Component } from "react";

export class MovieDatabase extends Component {
    state = {
        Movietittle: "ml",
        pesron: {
            director: "suku",
        },
        releaseyear: ['1, 2, 3'],
    };


    addnewmovies = () => {
        const newstate = { ...this.state };
        newstate.releaseyear.push("arya");
        this.setState(newstate);
    }
    removemovies = () => {
        const newstate = { ...this.state };
        newstate.releaseyear.pop();
        this.setState(newstate);
    }
    searchformovies = () => {
        const newstate = { ...this.state };
        newstate.releaseyear.splice(1, 0, "panja");
        this.setState(newstate);
    }

    render() {
        return (
            <div>

                <button onClick={this.addnewmovies}>addnewmovies</button>
                <br /> <br />
                <button onClick={this.removemovies}>removemovies</button>
                <br /> <br />
                <button onClick={this.searchformovies}>searchformovies</button>
                <br /> <br />

                <ul>
                    {this.state.releaseyear.map((val) => <li>{val}</li>)}
                </ul>

                <ul>
                <p>{this.state.pesron.Movietittle}</p>
                    <p>{this.state.pesron.director}</p>
                    <p>{this.state.pesron.releaseyear}</p>
                </ul>
            </div>
        )
    }
}