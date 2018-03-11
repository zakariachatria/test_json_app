import React,{Component} from "react";

export default class DeleteValue extends Component{
    render(){
        let options = [];
        let key;
        for (let i=0; i <Object.keys(this.props.jsonobjet).length ; i++){
            key =Object.keys(this.props.jsonobjet)[i];
            options.push(<option value={key} key={key}>{key}</option>)
        }
        return (
            <form onSubmit={this.props.handleDeleteValue}>
                <select onChange={this.props.handleValToDelete}>
                    {options}

                </select>
                <button>Delete</button>
            </form>
        );
    }

}