import React,{Component} from "react";

export default class ChooseType extends Component {
    render() {
        return (
            <form>
                <label forhtml="types">choose type to add : </label>
                <select onChange={this.props.handleChangeType}>
                    <option value='string'>string</option>
                    <option value='boolean'>boolean</option>
                    <option value='number'>number</option>
                    <option value='array'>array</option>
                </select>
            </form>
        );
    }
}