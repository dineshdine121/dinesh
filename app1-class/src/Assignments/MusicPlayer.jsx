import { Component } from "react";

export class MusicPlayer extends Component {
    state = {
        posttittle: "pk",
        pesron: {
            currentsong: "anaganaga",
            playlist: '1',
        },
        student: ["dine", "raje", "kiran"],
        Date: ['1, 2, 3'],
    };


    play = () => {
        const newstate = { ...this.state };
        newstate.student.push("a,d,g");
        this.setState(newstate);
    }
    pause = () => {
        const newstate = { ...this.state };
        newstate.student.splice(1,0,"ram");
        this.setState(newstate);
    }
    skip = () => {
        const newstate = { ...this.state };
        newstate.student.pop();
        this.setState(newstate);
    }

    render() {
        return (
            <div>

                <button onClick={this.play}>play</button> <br /> <br />
                 <button onClick={this.pause}>pause</button><br /><br />
              <button onClick={this.skip}>skip</button><br /><br />

              <ul>
                {this.state.student.map((val)=> <li>{val}</li> )}
              </ul>

                <ul>
                    <p>{this.state.pesron.currentsong}</p>
                    <p>{this.state.pesron.playlist}</p>
                </ul>
            </div>
        )
    }
}