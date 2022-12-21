import useEffectt from './useEffectt';
import './Stock.css';
import { useNavigate } from 'react-router-dom';

// Example of a data array that
// you might receive from an API
const data = [
{ name: "Ahmad", age: 19, gender: "Male" ,BloodGroup:"A+",Address:"Mandian Abbottabad"},
{ name: "Megha", age: 19, gender: "Female",BloodGroup:"O-",Address:"university Road Lahore" },
{ name: "Ali", age: 25, gender: "Male",BloodGroup:"Ab+",Address:"JinnahAbad Karachi"},
{ name: "Aslam", age: 33, gender: "Male" ,BloodGroup:"AB+",Address:"Mandian Abbottabad"},
{ name: "Neha", age: 28, gender: "Female",BloodGroup:"O+",Address:"university Road Islamabad" },
{ name: "Kashif", age: 35, gender: "Male",BloodGroup:"B+",Address:"Model Town Lahore"},
{ name: "Ahmad", age: 19, gender: "Male" ,BloodGroup:"A+",Address:"Mandian Abbottabad"},
{ name: "Megha", age: 19, gender: "Female",BloodGroup:"O-",Address:"university Road Lahore" },
{ name: "Ahmad", age: 19, gender: "Male" ,BloodGroup:"A+",Address:"Mandian Abbottabad"},
{ name: "Megha", age: 19, gender: "Female",BloodGroup:"O-",Address:"university Road Lahore" },
{ name: "Ali", age: 25, gender: "Male",BloodGroup:"Ab+",Address:"JinnahAbad Karachi"},
{ name: "Aslam", age: 33, gender: "Male" ,BloodGroup:"AB+",Address:"Mandian Abbottabad"},
{ name: "Neha", age: 28, gender: "Female",BloodGroup:"O+",Address:"university Road Islamabad" },
{ name: "Ali", age: 25, gender: "Male",BloodGroup:"Ab+",Address:"JinnahAbad Karachi"},
{ name: "Aslam", age: 33, gender: "Male" ,BloodGroup:"AB+",Address:"Mandian Abbottabad"},
{ name: "Neha", age: 28, gender: "Female",BloodGroup:"O+",Address:"university Road Islamabad" },
{ name: "Kashif", age: 35, gender: "Male",BloodGroup:"B+",Address:"Model Town Lahore"},
{ name: "Ahmad", age: 19, gender: "Male" ,BloodGroup:"A+",Address:"Mandian Abbottabad"},
{ name: "Megha", age: 19, gender: "Female",BloodGroup:"O-",Address:"university Road Lahore" },
{ name: "Ali", age: 25, gender: "Male",BloodGroup:"Ab+",Address:"JinnahAbad Karachi"},
{ name: "Aslam", age: 33, gender: "Male" ,BloodGroup:"AB+",Address:"Mandian Abbottabad"},
{ name: "Neha", age: 28, gender: "Female",BloodGroup:"O+",Address:"university Road Islamabad" },

]

function Stock() {
	const navigate= useNavigate();
  const goback=()=>{
    navigate(-1);
  };
return (
    <div id='main-container'>
	
    <div><h1>Available Donor in List</h1></div>
	<useEffectt/>
    <p>here are the people who are in list to be able to donate blood</p>
	<div className="Stock">
        
	<table>
		<tr>
		<th>Name</th>
		<th>Age</th>
		<th>Gender</th>
        <th>BloodGroup</th>
        <th>Address</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.age}</td>
			<td>{val.gender}</td>
            <td>{val.BloodGroup}</td>
            <td>{val.Address}</td>
			</tr>
		)
		})}
	</table>
	</div>
	<hr/>
  <button className="btn btn-primary" style={{backgroundColor:"Highlight"}} onClick={()=>goback()}>Goto signin Page</button>
    </div>
);
}

export default Stock;
