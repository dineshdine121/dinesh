import { Component } from "react";
import { EcommerceCart_Child } from "./EcommerceCart_Child";

export class EcommerceCart_Parent extends Component {
    state = {
        items:["jower"]
    };

    render() {
        return (
            <div>
                {this.state.items.map((pesron,i) => {
                    return (
                        <EcommerceCart_Child newPerson={pesron} key={i}/>
                    );

                })}
            </div>
        );
    }

}