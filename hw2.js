var Employees = [];

function addEmployee(){
  'use strict';
  
  var today = new Date();
  var date = today.toDateString()
  
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var department = document.getElementById('department').value;
  var employeeID = Math.floor(Math.random() * 100000000) + 1;
  var employee = {
    firstname: firstname,
    lastname: lastname,
    department: department,
    employeeID: employeeID,
    date: date
  };
  
  Employees.push(employee);
  console.log(Employees);
  
  document.getElementById('outputname').innerHTML ="Name: " + lastname + ", " + firstname;
  document.getElementById('outputdepartment').innerHTML ="Department: " + department;
  document.getElementById('outputemployeeid').innerHTML ="Employee ID: " + employeeID;
  document.getElementById('outputhiredate').innerHTML ="Hire Date: " + date;
  document.getElementById('outputtotalemployees').innerHTML ="Total Employees: " + Employees.length;
  document.getElementById('browser').innerHTML ="Browser: " + navigator.appName;

  return false;
}

function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addEmployee;
} 
window.onload = init;