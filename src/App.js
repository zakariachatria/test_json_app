import React, { Component } from 'react';

class App extends Component {
    state = {
        type: 'string',
        jsonobjet: {}
    };
    handleChangeType = (e) => {
        this.setState({type: e.target.value});
    };
    handleAddValue = (e) => {
        //type String
        e.preventDefault();
        const key = e.target.elements.key.value.trim();
        let jsonobjet2 = this.state.jsonobjet;
        if (this.state.type === 'number')
            jsonobjet2[key] = Number(e.target.elements.valeur.value.trim());

        else
            jsonobjet2[key] = e.target.elements.valeur.value.trim();

        this.setState(() => ({jsonobjet: jsonobjet2}));



    };
  render() {
    return (
      <div>
          <h1>JSON MAKER</h1>
          <ChooseType handleChangeType={this.handleChangeType}/>
          {this.state.type === 'string' &&
          <AddString
              handleAddValue={this.handleAddValue}
              type={this.state.type}
          />
          }
          {
              this.state.type === 'number' &&
              <AddNumber
                  handleAddValue={this.handleAddValue}
                  type={this.state.type}
              />
          }
          {JSON.stringify(this.state.jsonobjet) && <pre>{JSON.stringify(this.state.jsonobjet)}</pre>}
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
class AddString extends Component {
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
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
class AddNumber extends Component {
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
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default App;
