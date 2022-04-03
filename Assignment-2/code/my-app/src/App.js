import './App.css';
function App({employee}) {
return(<div className="container">
  <img className='employee_Img' src={employee.profileImg} alt="Employee_image"/>
  <div className='employee_Name'>{employee.name}</div>
  <EmployeeDetails  detail_Name={"Location"} details={employee.location}/>
  <EmployeeDetails  detail_Name={"Blood Group"} details={employee.bloodGroup}/>
  <EmployeeDetails  detail_Name={"Age"} details={employee.age}/>
</div>
)
}
function EmployeeDetails({detail_Name, details}){
  return(
  <div className='employeeDet_Wrapper'>
    <div className='employee_Detail_Label'>{detail_Name}</div>
    <div className='employee_Detail'>{details}</div>
  </div>
  )
}
export default App;