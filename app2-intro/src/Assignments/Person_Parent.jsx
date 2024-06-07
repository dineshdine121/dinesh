import { Component } from "react";
import { Person_Child } from "./Person_Child";

export class Person_Parent extends Component {
    state = {
        content: ["emotion"],
    };

    render() {
        return (
            <div>
                {this.state.content.map((pesron,i) => {
                    return (
                        <Person_Child newPerson={pesron} key={i}/>
                    );

                })}
            </div>
        );
    }

}