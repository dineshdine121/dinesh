import { Component } from "react";
import { ChatApplication_Child } from "./ChatApplication_Child";

export class ChatApplication_Parent extends Component {
    state = {
        message: ["hi","hlo"],
    };

    render() {
        return (
            <div>
                {this.state.message.map((pesron,i) => {
                    return (
                        <ChatApplication_Child newPerson={pesron} key={i}/>
                    );

                })}
            </div>
        );
    }

}