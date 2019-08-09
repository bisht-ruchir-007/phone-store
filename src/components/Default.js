import React, { Component } from 'react';

export default class Default extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <span className="text-title col-10 mx-auto text-center">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h2>Page not Found</h2>
                        <h3>the requested URL : <span className="text-danger">{this.props.location.pathname}</span> was not found</h3>
                    </span>
               </div>
            </div>
        )
    }
} 