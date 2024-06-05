import { Component } from "react";

export class Person_Child extends Component {
    render() {
        console.log(this.props);
        const { newPerson } = this.props;
        return (<div>
            <ul>
                <li>{newPerson.author}</li>
                <li>{newPerson.posttitle}</li>
            </ul>
        </div>
        );
    }
}