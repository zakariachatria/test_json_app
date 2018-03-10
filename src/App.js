import React, { Component } from 'react';

class App extends Component {
    state = {
        type: 'string',
        etat: undefined,
        jsonobjet: {}
    };
    handleChangeType = (e) => {
        this.setState({type: e.target.value});
    };
    handleAddValue = (e) => {
        //type String + Number + boolean
        e.preventDefault();
        const key = e.target.elements.key.value.trim();
        let jsonobjet2 = this.state.jsonobjet;
        if (e.target.elements.valeur !== undefined) {
            if (this.state.type === 'number')
                jsonobjet2[key] = Number(e.target.elements.valeur.value.trim());
            else
                jsonobjet2[key] = e.target.elements.valeur.value.trim();

            this.setState(() => ({jsonobjet: jsonobjet2}));
        }
        else if (this.state.etat !== undefined) {
            jsonobjet2[key] = this.state.etat;
            this.setState(() => ({jsonobjet: jsonobjet2}))

        }
        };
    handleChangeBoolean = (e) => {
        let value = e.target.id === 'True' ? true : false;
        this.setState({
            etat: value
        });
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
          {
              this.state.type === 'boolean' &&
              <AddBoolean
                  handleChangeBoolean={this.handleChangeBoolean}
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
                <label forhtml="types">choose type to add : </label>
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
                    <button>Add</button>
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
                    <button>Add</button>
                </form>
            </div>
        );
    }
}
class AddBoolean extends Component {
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

export default App;
