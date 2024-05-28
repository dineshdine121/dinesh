import { Component } from "react";

export class LanguageLearningApp extends Component {
    state = {
        vocabularywords: "put",
        pesron: {
            definitions: "5",
        },
        examplesentences: ["is there u"]
    };


    addnewwords = () => {
        const newstate = { ...this.state };
        newstate.examplesentences.push("give");
        this.setState(newstate);
    };
    removewords = () => {
        const newstate = { ...this.state };
        newstate.examplesentences.pop();
        this.setState(newstate);
    };
    testvocabularyknowledge = () => {
        const newstate = { ...this.state };
        newstate.examplesentences.splice(1, 0, "get");
        this.setState(newstate);
    };

    render() {
        return (
            <div>

                <button onClick={this.addnewwords}>addnewwords</button><br /> <br /> 
                <button onClick={this.removewords}>removewords</button><br /> <br />
                <button onClick={this.testvocabularyknowledge}>testvocabularyknowledge</button> <br /> <br />

                <ul>
                    {this.state.examplesentences.map((val) => <li>{val}</li>)}
                </ul>
                <ul>
                    <p>{this.state.pesron.vocabularywords}</p>
                    <p>{this.state.pesron.definitions}</p>
                    <p>{this.state.pesron.examplesentences}</p>
                </ul>
            </div>
        )
    }
}