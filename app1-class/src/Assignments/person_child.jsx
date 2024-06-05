import { Component } from "react";

export class person_child extends Component {
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