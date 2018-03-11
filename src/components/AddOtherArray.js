import React ,{Component} from 'react';
import AddArray from './AddArray';
export default class AddOtherArray extends Component{



render(){



    return(

        <AddArray setArray = {this.props.setArray}/>
    );
}
}