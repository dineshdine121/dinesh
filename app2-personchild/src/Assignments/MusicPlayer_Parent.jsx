import { Component } from "react";
import { MusicPlayer_Child } from "./MusicPlayer_Child";

export class MusicPlayer_Parent extends Component {
    state = {
        student: ["dine", "raje", "kiran"],
    };

    render() {
        return (
            <div>
                {this.state.student.map((pesron,i) => {
                    return (
                        <MusicPlayer_Child newPerson={pesron} key={i}/>
                    );

                })}
            </div>
        );
    }

}