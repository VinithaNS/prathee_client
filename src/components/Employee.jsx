import React, { useState, useEffect } from "react";
import { API } from "../global";
const EmployeeList = () => {
  const [employeeInfo, setEmployeeInfo] = useState([]);
  console.log(employeeInfo);
  const getCompanies = () => {
    fetch(`${API}/api/employees/getemployee`, { method: "GET" })
      .then((data) => data.json())
      .then((companiesdetail) => setEmployeeInfo(companiesdetail));
  };
  useEffect(() => getCompanies(), []);
  return (
    <>
      <div className="container" style={{ minHeight: "100%" }}>
        <div className="row">
          <div className="company-header">
            <div className="col-md-6">
              {employeeInfo.map((cmp) => (
                <div className="col">
                  <p className="contact">Employee Data</p>
                  

                  <h4 className="movie-summary">{cmp.empname}</h4>
                  
                  <p>{cmp.empcode}</p>
                  <p>{cmp.department}</p>
                  <p>{cmp.role}</p>
                  <p>{cmp.phone}</p>
                      <p>{cmp.email}</p>
                      <p>{cmp.mobilenumber}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
