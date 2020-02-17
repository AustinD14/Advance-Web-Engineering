var Employees = [];


function addEmployee(){
  'use strict';
  
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
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
  
  document.getElementById('outputname').innerHTML ="Name: " + firstname + ' ' + lastname;
  document.getElementById('outputdepartment').innerHTML ="Department: " + department;
  document.getElementById('outputemployeeid').innerHTML ="Employee ID: " + employeeID;
  document.getElementById('outputhiredate').innerHTML ="Hire Date: " + date;
  
  return false;
}

function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addEmployee;
} 
window.onload = init;