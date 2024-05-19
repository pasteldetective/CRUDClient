/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  const history = useHistory();

  // delete campus
  const nowDeleteCampus = async (id) => {
    try {
      const response = await fetch(`/api/campuses/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      history.push('/campuses'); // Redirect to the list of all campuses after deletion
    } catch (error) {
      console.error("Failed to delete campus:", error);
    }
  };
  
  // Render a single Campus view with list of its students
  return (
    <div className="campus">
      <h1 className="campusName">{campus.name} 
      </h1>
      <p className="text"><span className="label">Address: </span>{campus.address}</p>
      <img className="campusImage" src = {campus.imageUrl}  alt="campus_image" width="500" height="300"></img>
    
      <div className="descriptionContainer">
        <p className="text">{campus.description}</p>
        <h4>campus id: {campus.id}</h4>
      </div>
      
      <span>
        <Link to={`/editcampus/${campus.id}`}>
        <Button variant="contained" color="primary" className="editButton"> Edit </Button>
        </Link>
        <Button variant="contained" color="secondary" className="deleteButton" onClick={() => nowDeleteCampus(campus.id)}>Delete</Button>
      </span>
    
      <h1>Enrolled Students</h1>
      <p className="numberStudents">Number of Students: <span className="numberStudentsNumber">{campus.students.length}</span></p>
      {campus.students.length === 0 ?
        <p className="text"> No enrolled students </p>
        :
      campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link style={{textDecoration: 'none'}} to={`/student/${student.id}`}>
              <div className="studentLink" >{name}</div>
            </Link>             
          </div>
        );
      })}
      <br/>
    </div>
  );
};

export default CampusView;