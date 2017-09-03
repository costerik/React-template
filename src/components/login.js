import React from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component{
    constructor(props){
        super();
        this.login = this.login.bind(this);
        this.data = this.data.bind(this);
        this.state = {  login:"",
                        password:"",
                        loggedIn: false,
                        spinner: false
                    };
    }

    login(){
        console.log("Button pressed "+this.state.login+" "+this.state.password);
        if(this.state.login.length>0 && this.state.password.length>0){
            this.setState({loggedIn:true});
            // this.setState({spinner:true});
            // setTimeout(()=>{
            //     this.setState({spinner:false});
            // }, 3000);
        }
    }

    data(e){
        if(e.target.name=="user"){
            this.setState({login:e.target.value})
        }else{
            this.setState({password: e.target.value});
        }
    }

    render(){
        if(this.state.loggedIn){
            return(
                <Redirect to="/main"/>
            ); 
        }else{
            return(
                <div>
                    <div className="logo"/>
                    <div className="login"> 
                        <label htmlFor="user">User</label>
                        <input type="text" name="user" onChange={this.data} value={this.state.login}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={this.data} value={this.state.password}/>
                        <Button bsStyle="primary" onClick={this.login} >
                            {
                                this.state.spinner? <i className="fa fa-spinner fa-spin"/>:"Login"
                            }     
                        </Button>
                    </div>
                </div>         
            );
        }
    }
}