

import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class getAQuote extends Component {

    constructor(props) {
        super(props)
        this.state = {
                QuoteMessage : ''
        }
    }

    componentDidMount(){
        EmployeeService.getQuote().then(res => {
            this.setState({
                QuoteMessage: res.data
            })
        })
    }

    render(props) {
        return (
            <div >
                <center><h3>Here is a Quote for you : </h3>
                  <h1>{this.state.QuoteMessage}</h1>
                </center>
            </div>
        );
    }
}

export default getAQuote;