import React from 'react';
import './App.css';

const employee={
  name: 'Alan Ford', Id: '00005152', Appointment: '9:00 (25-05-2016)', 
  email: 'alan.form@email.com', Phone: '+31123456789', status:'InProgress', door: 'Mark', time: '10:30', 
  date: '(25-05-2016)', profileImg: 'https://www.w3schools.com/howto/img_avatar.png',
  role: 'Boltart Bosbessan', summary: 'Overheerlike Boltaart met Bosbessen uit de keuken van de Bijenkort.'
}
var arrow="<"
function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div className='header_container'>
      <p id='header_arrow'>{arrow}</p>
      <div className='header_name'> <h3>{employee.name}</h3> <p>{employee.Id}</p></div>
      <div className='button1'><button >Print</button></div>
    </div>
    <div className='info_Details_wrapper'>
      <EmployeeDetails1  detail_Name={"Appointment"} details={employee.Appointment}/>
      <EmployeeDetails1  detail_Name={"Email"} details={employee.email}/>
      <EmployeeDetails1  detail_Name={"Phone"} details={employee.Phone}/>
    </div>
    <div className='order_info_wrapper'>
      <div className='status-dot'></div>
      <EmployeeDetails2  detail_Name={"Status"} details= {"" + employee.status}/>
      <EmployeeDetails2  detail_Name={"Door"} details={employee.door}/>
      <EmployeeDetails2  detail_Name={"Time"} details={employee.time}/>
      <div className='em_date'>{employee.date}</div>
    </div>
    <div className='product_list_wrapper'>
      <div className='check-box-wrapper'>
        <div className= 'check-box'></div>
      </div>
      <div className='profileImg'>
        <img src= {employee.profileImg} alt=''></img>
      </div>
      <div className='side-text-wrapper'>
        <div className='employee-role'>{employee.role}</div>
        <div className='employee-summary'>{employee.summary}</div>
        <p id='header_arrow1'>{arrow}</p>
      </div>
    </div>
    </div>
  );
}

const EmployeeDetails1 =({detail_Name, details}) => {
  return(
  <div className='employeeDet_Wrapper1'>
    <div className='employee_Detail_Label1'>{detail_Name + "   :"}</div>
    <div className='employee_Detail1'>{details}</div>
  </div>
  )
}
const EmployeeDetails2 =({detail_Name, details}) => {
  return(
  <div className='employeeDet_Wrapper2'>
    <div className='employee_Detail_Label2'>{detail_Name +" "}</div>
    <div className='employee_Detail2'>{details}</div>
  </div>
  )
}
export default App;