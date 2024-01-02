import React, { Component } from "react";

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Home</h1>
                <div>
                    <p>Choose a link:</p>
                    <ul>
                        <li>
                            <a href="http://localhost:3000/employees" rel="noopener noreferrer">
                                Link to Employees
                            </a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/vendors" rel="noopener noreferrer">
                                Link to Vendors
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HomeComponent;
