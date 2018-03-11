import React, { Component } from 'react';
import ChooseType from  './components/ChooseType';
import AddString from  './components/AddString';
import AddNumber from  './components/AddNumber';
import AddBoolean from  './components/AddBoolean';
import DeleteValue from  './components/DeleteValue';
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
    handleValToDelete=(e)=> {
        let value =e.target.value;
        this.setState({valTodelete:value});
    };
    handleDeleteValue=(e) =>{
        e.preventDefault();
        let jsonobjet2 = this.state.jsonobjet;
        let val=Object.keys(jsonobjet2).includes(this.state.valTodelete)?this.state.valTodelete:Object.keys(jsonobjet2)[0];
        delete jsonobjet2[val];
        this.setState({jsonobjet:jsonobjet2});

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
          <DeleteValue
              jsonobjet={this.state.jsonobjet}
              handleValToDelete={this.handleValToDelete}
              handleDeleteValue={this.handleDeleteValue}
          />
          {JSON.stringify(this.state.jsonobjet) && <pre>{JSON.stringify(this.state.jsonobjet)}</pre>}
      </div>
    );
  }
}
export default App;
