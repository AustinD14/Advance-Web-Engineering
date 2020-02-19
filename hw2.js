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
    "firstname": firstname,
    "lastname": lastname,
    "department": department,
    "employeeID": employeeID,
    "date": date
  };


  Employees.push(employee);
  console.log(Employees);
  // console.log(JSON.stringify(Employees));


  document.getElementById('outputname').innerHTML ="Name: " + lastname + ", " + firstname;
  document.getElementById('outputdepartment').innerHTML ="Department: " + department;
  document.getElementById('outputemployeeid').innerHTML ="Employee ID: " + employeeID;
  document.getElementById('outputhiredate').innerHTML ="Hire Date: " + date;
  document.getElementById('outputtotalemployees').innerHTML ="Total Employees: " + Employees.length;
  document.getElementById('browser').innerHTML ="Browser: "+ currentBrowser();

  return false;
}

function currentBrowser(){
  var sBrowser, sUsrAg = navigator.userAgent;

if (sUsrAg.indexOf("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
  sBrowser = "Samsung Internet";
} else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
  sBrowser = "Opera";
} else if (sUsrAg.indexOf("Trident") > -1) {
  sBrowser = "Microsoft Internet Explorer";
} else if (sUsrAg.indexOf("Edge") > -1) {
  sBrowser = "Microsoft Edge";
} else if (sUsrAg.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome or Chromium";
} else if (sUsrAg.indexOf("Safari") > -1) {
  sBrowser = "Apple Safari";
} else {
  sBrowser = "unknown";
}

  // alert("You are using: " + sBrowser);
  return sBrowser;
}

function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addEmployee;
} 
window.onload = init;