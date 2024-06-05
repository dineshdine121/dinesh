import { Component } from "react";

export class BlogPostManager extends Component {
    state = {
        posttitle: "4",
        pesron: {
            author: "abdul kalam",
        },
        content: ["emotion"],
        tags: ["2"]
    };


    createnewposts = () => {
        const newstate = { ...this.state };
        newstate.tags.push("photo", "video");
        this.setState(newstate);
    };
    deleteposts = () => {
        const newstate = { ...this.state };
        newstate.tags.pop();
        this.setState(newstate);
    };
    editposts = () => {
        const newstate = { ...this.state };
        newstate.tags.splice(1, 0, "5");
        this.setState(newstate);
    };

    render() {
        return (
            <div>

                <button onClick={this.createnewposts}>createnewposts</button> <br /> <br />
                <button onClick={this.deleteposts}>deleteposts</button><br /> <br />
                <button onClick={this.editposts}>editposts</button><br /> <br />

                <ul>
                    {this.state.tags.map((val) => <li>{val}</li>)}
                </ul>
                <ul>
                    <p>{this.state.pesron.posttitle}</p>
                    <p>{this.state.pesron.author}</p>
                    <p>{this.state.pesron.content}</p>
                    <p>{this.state.pesron.tags}</p>
                </ul>
            </div>
        )
    }
}