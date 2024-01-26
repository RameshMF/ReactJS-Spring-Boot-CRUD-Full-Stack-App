import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class DownloadEmployees extends Component{
  handleDownload = () => {
    EmployeeService.downloadAllEmployees().then((response) => {
      const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'employees.xlsx';
      link.click();
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDownload}>Download Employees</button>
      </div>
    );
  }
}

export default DownloadEmployees;