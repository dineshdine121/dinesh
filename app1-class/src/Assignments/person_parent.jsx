import { Component } from "react";

export class Person_Parent extends Component {
    state = {
        posttitle: "4",
        pesron: {
            author: "abdul kalam",
        },
        content: ["emotion"],
        tags: ["2"]
    };

    render() {
        return (
            <div>
                {this.state.pesron.map((pesron,i) => {
                    return (
                        <Person_Child newPerson={pesron} key={i}/>
                    );

                })}
            </div>
        );
    }

}