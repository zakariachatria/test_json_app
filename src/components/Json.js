import React, { Component } from 'react';
import ChooseType from  './ChooseType';
import AddString from  './AddString';
import AddNumber from  './AddNumber';
import AddBoolean from  './AddBoolean';
import DeleteValue from  './DeleteValue';
import AddArray from './AddArray';
export default class Json extends Component {
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
    handleSendArray=(key,array )=>{
        let jsonobjet2 = this.state.jsonobjet;
            jsonobjet2[key]=array;
        this.setState(({jsonobjet:jsonobjet2}));
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem("jsonobjet");
            const jsonobjet = JSON.parse(json);
            if (jsonobjet) {
                this.setState(() => ({jsonobjet}));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {

            
                const json = JSON.stringify(this.state.jsonobjet);
                localStorage.setItem("jsonobjet", json);


    }

    render() {
        return (
            <div>

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
                {Object.keys(this.state.jsonobjet).length!==0 && <DeleteValue
                    jsonobjet={this.state.jsonobjet}
                    handleValToDelete={this.handleValToDelete}
                    handleDeleteValue={this.handleDeleteValue}
                />
                }
                { this.state.type === 'array' &&
                    <AddArray handleSendArray={this.handleSendArray}/>
                }
           <div className={"json"}>
               {JSON.stringify(this.state.jsonobjet) && <h2><pre>{JSON.stringify(this.state.jsonobjet)}</pre></h2>}
           </div>

            </div>
        );
    }
}