import { Component } from "react";

export class ChatApplication extends Component {
    state = {
        sender: "mani",
        pesron: {
            receiver:"laya",
        },
        message: ["hi","hlo"],

    };


    sendmessages = () => {
        const newstate = { ...this.state };
        newstate.message.push("mani");
        this.setState(newstate);
    }
    deletemessages = () => {
        const newstate = { ...this.state };
        newstate.message.pop();
        this.setState(newstate);
    }
    searchformessages = () => {
        const newstate = { ...this.state };
        newstate.message.splice(1,0,"ram");
        this.setState(newstate);
    }

    render() {
        return (
            <div>

                <button onClick={this.sendmessages}>sendmessages</button>
                 <button onClick={this.deletemessages}>deletemessages</button>
              <button onClick={this.searchformessages}>searchformessages</button>

              <ul>
                {this.state.message.map((val)=> <li>{val}</li> )}
              </ul>

                <ul>
                    <p>{this.state.pesron.sender}</p>
                    <p>{this.state.pesron.receiver}</p>
                </ul>
            </div>
        )
    }
}