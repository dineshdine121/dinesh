import { Component } from "react";

export class person_parent extends Component {
    state = {
        posttitle: "4",
        pesron: {
            author: "abdul kalam",
        },
        content: ["emotion"],
        tags: ["2"]
    };

    render(){
        return <div>
        {this.state.pesron.map((pesron)=>{
        return(
          <person_child newPerson={pesron}/>
        );
        
    })}
        </div>
    }

}