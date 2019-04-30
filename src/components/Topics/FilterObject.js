import React, { Component } from 'react';

export default class FilterObject extends Component{
    constructor(){
        super();
        this.state={
            unfilteredArray:[{Name: 'Cate', Age: 22, FaveColor: 'Blue'}, {Name: 'Dylan', Age: 26, Car: 'FJ Cruiser'}, {Name: 'Sierra', Age: 27}],
            userInput:'',
            filteredArray:[]
        }
    }
 onChange() {

 }  

handleChange(val){
    this.setState({ userInput: val})
}
    
filterArray(prop){
    var unfilteredArray= this.state.unfilteredArray;
    var filteredArray=[];

    for(var i=0; i<unfilteredArray.length; i++){
        if(unfilteredArray[i].hasOwnProperty(prop)){
            filteredArray.push(unfilteredArray[i])
        }
    }
    this.setState({filteredArray: filteredArray})
}   
    
    render(){
        return(
            <div className='puzzleBox filterObject PB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'> Original: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={(e)=> this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={()=> this.filterArray(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}
