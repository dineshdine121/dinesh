import { Component } from "react";
import { GameCharcter_Child } from "./GameCharcter_Child";

export class GameCharcter_Parent extends Component {
    state = {
        healthpoints: ["20","28"]
    };

    render() {
        return (
            <div>
                {this.state.healthpoints.map((pesron,i) => {
                    return (
                        <GameCharcter_Child newPerson={pesron} key={i}/>
                    );

                })}
            </div>
        );
    }

}