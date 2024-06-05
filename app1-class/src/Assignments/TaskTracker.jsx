import { Component } from "react";

export class TaskTracker extends Component {
    state = {
        taskname: "cricket",
        pesron: {
          DueDate:"2/3/2000",
        },
        priority: ["playing"]
    };


    addtasks= () => {
        const newstate = { ...this.state };
        newstate.priority.push("kabaddi");
        this.setState(newstate);
    };
    marktasksascomplete = () => {
        const newstate = { ...this.state };
        newstate.priority.splice(1, 0, "bat");
        this.setState(newstate);
    };
    filtertasksbypriority = () => {
        const newstate = { ...this.state };
        newstate.priority.pop();
        this.setState(newstate);
    };

    render() {
        return (
            <div>

                <button onClick={this.addtasks}>addtasks</button> <br /> <br />
                <button onClick={this.marktasksascomplete}>marktasksascomplete</button><br /> <br />
                <button onClick={this.filtertasksbypriority}>filtertasksbypriority</button><br /> <br />

                <ul>
                    {this.state.priority.map((val) => <li>{val}</li>)}
                </ul>
                <ul>
                    <p>{this.state.pesron.taskname}</p>
                    <p>{this.state.pesron.DueDate}</p>
                    <p>{this.state.pesron.priority}</p>
                </ul>
            </div>
        )
    }
}