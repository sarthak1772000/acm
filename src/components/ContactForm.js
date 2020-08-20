
import React, { Component } from 'react';
import './fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from 'reactstrap';

class Form extends Component {
    
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            subject:'',
            message:''
        }
    }

    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    
    handleEmailChange=(event)=>{
        this.setState({
           email:event.target.value
        })
    }
    handleSubjectChange=(event)=>{
        this.setState({
            subject:event.target.value
        })
    }
    handleMessagetChange=(event)=>{
        this.setState({
            message:event.target.value
        })
    }
    handleSubmit=(event)=>{
       
       alert(`${this.state.username} ${this.state.email} ${this.state.subject}`)
       event.preventDefault();
    }

    render() {
    return (
    <Container>
        <div className="card bg-light">
                        <article
                            className="card-body mx-auto"
                            style={{ maxWidth: "400px" }}
                        >
                            <h4 className="card-title mt-3 text-center form-header" style={{borderBottom:'2px solid #49a1eb'}}>
                              Contact Us
                            </h4>
                            <p className="text-center">
                               Feel free to get in touch!
                            </p>
     <form onSubmit={this.handleSubmit}>
         
        <div className="form-group input-group">
             <div className="input-group-prepend">
                <span className="input-group-text">
                        <FontAwesomeIcon icon="user" />
               </span>
            </div>
            <input
                 name=""
                 className="form-control"
                 placeholder="Your name"
                 type="text"
                 value={this.state.username}
                 onChange={this.handleUsernameChange}
            />
        </div>
        <div className="form-group input-group">
             <div className="input-group-prepend">
                <span className="input-group-text">
                        <FontAwesomeIcon icon="envelope" />
               </span>
            </div>
            <input
                 name=""
                 className="form-control"
                 placeholder="Your email"
                 type="text"
                 value={this.state.email}
                 onChange={this.handleEmailChange}
            />
        </div>
        <div className="form-group input-group">
             <div className="input-group-prepend">
                <span className="input-group-text">
                        <FontAwesomeIcon icon="tags" />
               </span>
            </div>
            <input
                 name=""
                 className="form-control"
                 placeholder="subject"
                 type="text"
                 value={this.state.subject}
                 onChange={this.handleSubjectChange}
            />
        </div>
        <div className="form-group input-group">
             <div className="input-group-prepend">
                <span className="input-group-text">
                        <FontAwesomeIcon icon="tags" />
               </span>
            </div>
            <textarea
                 name=""
                 className="form-control"
                 placeholder="message"
                 type="textarea"
                 value={this.state.message}
                 onChange={this.handleMessagetChange}
            />
        </div>
        <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                    >
                                        {" "}
                                        Send{" "}
                                    </button>
                                </div>
     </form>
     </article>
                    </div>

     </Container>
    );
  }
}
export default Form;
