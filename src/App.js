import React, { Component } from 'react';

class App extends Component {
    state = {
        type: 'string'
    };
    handleChangeType = (e) => {
        this.setState({type: e.target.value});
    };
  render() {
    return (
      <div>
          <h1>JSON MAKER</h1>
          <ChooseType handleChangeType={this.handleChangeType}/>

      </div>
    );
  }
}
class ChooseType extends Component {
    render() {
        return (
            <form>
                <label forhtml="type">choose type to add : </label>
                <select onChange={this.props.handleChangeType}>
                    <option value='string'>string</option>
                    <option value='boolean'>boolean</option>
                    <option value='number'>number</option>
                </select>
            </form>
        );
    }
}

export default App;
