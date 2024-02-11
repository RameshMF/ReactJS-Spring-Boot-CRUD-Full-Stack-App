import React, { Component } from 'react'
import VendorService from '../services/VendorService'

class ViewVendorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        VendorService.getVendorById(this.state.id).then( res => {
            this.setState({vendor: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Vendor Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Vendor First Name: </label>
                            <div> { this.state.vendor.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Vendor Last Name: </label>
                            <div> { this.state.vendor.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Vendor Email ID: </label>
                            <div> { this.state.vendor.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewVendorComponent
