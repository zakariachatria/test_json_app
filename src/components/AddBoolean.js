import React,{Component} from "react";

export default class AddBoolean extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleAddValue}>
                <label forhtml="key">enter the key : </label>

                <input type="text" name='key'/>
                <br/>

                <label>
                    True:
                    <input
                        name="rad"
                        id="True"
                        type="radio"
                        onChange={this.props.handleChangeBoolean}/>
                </label>


                <label>
                    False:
                    <input
                        name="rad"
                        type="radio"
                        id="False"
                        onChange={this.props.handleChangeBoolean}/>
                </label>
                <br/>
                <button >Add</button>

            </form>
        );
    }
}