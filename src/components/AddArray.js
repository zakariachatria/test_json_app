import React , {Component} from 'react';
import AddOtherArray from './AddOtherArray';
export default class AddArray extends Component {
    state={
        key:'',
        etat:undefined,
        addjson:false,
        addstring:false,
        addnumber:false,
        addboolean:false,
        addarray:false,
        justCreated:true,
        array:[]

    };
    handlePush=(e)=>{
        e.preventDefault();
        let item;
        if (e.target.elements.valeur !== undefined) {
        if(this.state.addnumber)
             item =Number(e.target.elements.valeur.value.trim());
        else
             item =e.target.elements.valeur.value.trim();
        this.setState((prevState)=>({array:prevState.array.concat(item)}));
        }
        else if (this.state.etat !== undefined)
        {
            item=this.state.etat;
            //alert(item);
            this.setState((prevState)=>({array:prevState.array.concat(item)}));
        }




    };
    handleAddJson =() =>{
        this.setState({addjson:true,addstring:false,addnumber:false,addboolean:false,addarray:false});

    };
    handleAddString =() =>{
        this.setState({addjson:false,addstring:true,addnumber:false,addboolean:false,addarray:false});


    };
    handleAddNumber =() =>{
        this.setState({addjson:false,addstring:false,addnumber:true,addboolean:false,addarray:false});

    };
    handleAddBoolean =() =>{
        this.setState({addjson:false,addstring:false,addnumber:false,addboolean:true,addarray:false});

    };
    handleAddArray =() =>{

        this.setState({addjson:false,addstring:false,addnumber:false,addboolean:false,addarray:true});



    };
    handleChangeBoolean = (e) => {
        let value = e.target.id === 'True' ? true : false;
        this.setState({
            etat: value
        });
    };
    handleSendArray=(e)=>{
        e.preventDefault();
        let key = e.target.elements.key.value.trim();
        this.props.handleSendArray(key,this.state.array);
        this.setState({key:key});

    };

    render(){

        return(
            <div>
            <h1>AddToArray</h1>

                <button onClick={this.handleAddString}>addString</button>
                <button onClick={this.handleAddNumber}>addNumber</button>
                <button onClick={this.handleAddBoolean}>addBoolean</button>
                <button onClick={this.handleAddArray}>addArray</button>
                <button onClick={this.handleAddJson}>addJson</button>

                {this.state.addstring &&
                <form onSubmit={this.handlePush}>
                    <input type="text" name="valeur" placeholder="string"/>
                    <button>add</button>
                </form>

                }
                {this.state.addnumber &&
                <form onSubmit={this.handlePush}>
                    <input type="text" name="valeur" placeholder="number"/>
                    <button>add</button>
                </form>

                }
                {this.state.addboolean &&
                <form onSubmit={this.handlePush}>
                    <label>
                        True:
                        <input
                            name="rad"
                            id="True"
                            type="radio"
                            onChange={this.handleChangeBoolean}/>
                    </label>


                    <label>
                        False:
                        <input
                            name="rad"
                            type="radio"
                            id="False"
                            onChange={this.handleChangeBoolean}/>

                    </label>
                    <br/>
                    <button type="submit" className="btn btn-primary">Add</button>

                </form>
                }

                {this.state.addarray &&
                        <AddOtherArray setArray={this.setArray} />}

                <h2>{JSON.stringify(this.state.array)}</h2>
                <form onSubmit={this.handleSendArray}>

                    <br/>


                    <label forhtml="key">enter the key : </label>

                    <input type="text" name='key' />
                    <br/>
                    <button type="submit" className="btn btn-primary"  >Add</button>
                </form>

            </div>

        );
    }




}