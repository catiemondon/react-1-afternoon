import React, { Component } from 'react';


export default class FilterString extends Component{
    constructor(){
        super();
        this.state={
            unfilteredArray:['Hi', 'my', 'name', 'is', 'Cate', 'and', 'I', 'love', 'to', 'hike'],
            userInput: '',
            filteredArray: []
        }

    }


    handleChange(val){
        this.setState({userInput: val})
    }

    filterArray(userInput){
        var unfilteredArray= this.state.unfilteredArray;
        var filteredArray=[];

        for(var i=0; i<unfilteredArray.length; i++){
            if(unfilteredArray[i].includes(userInput)){
                filteredArray.push(unfilteredArray[i])
            }
        }

        this.setState({filteredArray: filteredArray})
    }





    render(){
    return(
        <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            <span className='puzzleText'>Unsorted: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
            <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className='confirmationButton' onClick={()=>this.filterArray(this.state.userInput)}> Sort</button>
            <span className='resultsBox filterStringRB'>Sorted: {this.state.filteredArray}</span>
        </div>
    )
    }
}