import React ,{Component} from "react";

export default class AddString extends Component {
    render() {
        return (
            <div>

                <form onSubmit={this.props.handleAddValue}>

                    <br/>
                    <label forhtml="key">enter the key : </label>

                    <input type="text" name='key'/>
                    <br/>
                    <label forhtml="value">enter a {this.props.type} : </label>

                    {<input type="text" name='valeur'/>}


                    <br/>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }
}