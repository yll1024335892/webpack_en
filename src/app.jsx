import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './index.scss';


class Component extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num:1
        };
    }
    eventClick() {
        this.setState({
            num:this.state.num+=1
        });
    }
    render (){
        return (<div>
                    <h1>number : {this.state.num}</h1>
                    <button onClick={(e)=>{
                        this.eventClick(e);
                    }}>增加</button>
        </div>)
        
       
    }
}
ReactDOM.render(
    <Component/>,
    document.getElementById("app")
);

