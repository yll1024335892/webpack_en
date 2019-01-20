import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router ,Route,Link,Switch} from 'react-router-dom';

import './index.css';
import './index.scss';

class A extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div>component A,参数是:{this.props.match.params.id}</div>
                <Switch>
                 <Route exact path={`${this.props.match.path}`} 
                        render={(route)=>{
                            return <div>当前组件是不带参数</div>
                        }}
                    />
                    <Route path={`${this.props.match.path}/:id`} 
                        render={(route)=>{
                            return <div>当前组件是带参数：{route.match.params.id}</div>
                        }}
                    />
                </Switch>
            </div>
        )
    }
}
class B extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>component B</div>
        )
    }
}
class Wrapper extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Link to="/a/123">组件a</Link>
                <br/>
                <Link to="/b">组件b</Link>
            {this.props.children}
            </div>
        )
    }
}


ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path="/a/:id" component={A}/>
            <Route path="/b" component={B}/>
        </Wrapper>
    </Router>,
    document.getElementById("app")
);

