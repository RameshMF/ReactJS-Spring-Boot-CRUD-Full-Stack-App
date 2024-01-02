import React, { Component } from 'react'
import VendorService from '../services/VendorService'

class ListVendorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                vendors: []
        }
        this.addVendor = this.addVendor.bind(this);
        this.editVendor = this.editVendor.bind(this);
        this.deleteVendor = this.deleteVendor.bind(this);
    }

    deleteVendor(id){
        VendorService.deleteVendor(id).then( res => {
            this.setState({vendors: this.state.vendors.filter(vendor => vendor.id !== id)});
        });
    }
    viewVendor(id){
        this.props.history.push(`/view-vendor/${id}`);
    }
    editVendor(id){
        this.props.history.push(`/add-vendor/${id}`);
    }

    componentDidMount(){
        VendorService.getVendors().then((res) => {
            this.setState({ vendors: res.data});
        });
    }

    addVendor(){
        this.props.history.push('/add-vendor/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Vendors List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addVendor}> Add Vendors</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Vendor First Name</th>
                                    <th> Vendor Last Name</th>
                                    <th> Vendor Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.vendors.map(
                                        vendor => 
                                        <tr key = {vendor.id}>
                                             <td> { vendor.firstName} </td>   
                                             <td> {vendor.lastName}</td>
                                             <td> {vendor.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editVendor(vendor.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteVendor(vendor.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewVendor(vendor.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListVendorComponent
