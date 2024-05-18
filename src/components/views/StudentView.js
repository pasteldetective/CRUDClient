/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link , useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
//import { editStudent } from "../../store/actions/actionCreators";

const StudentView = (props) => {
  const { student } = props;
  const history = useHistory();

  const handleDeleteStudent = async (id) => {
    try {
      const response = await fetch(`/api/students/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      history.push('/students'); // Redirect to the list of all students after deletion
    } catch (error) {
      console.error("Failed to delete student:", error);
    }
  };

  if(student === null)
  {
    return (
      <div>
        <p>There are no students.</p>
      </div>
      );
  }

  return (
    <div className="student">
      <br/><br/><br/>
      <h1 style={{color: "#63229A", marginTop: "2%"}}>{student.firstname + " " + student.lastname}</h1>

      <span className="studentImageWrap">
        <img className="studentImage" src={student.imageURL} alt="profilePicture" width="500" height="300"></img>
      </span>
      {student.campus !== null ? 
      
        <Link style={{textDecoration: 'none'}} to={`/campus/${student.campus.id}`}>
            <div className="label">Campus: <span className="campusLink">{student.campus.name}</span></div>
        </Link>
        : 
        <h3>NO CAMPUS</h3> 
      }

      <h3 className="text"><span className="label">Email:</span> {student.email}</h3>
      
      <h3 className="text"><span className="label">GPA:</span> {student.gpa}</h3>

      <div>
          <Link to={`/editstudent/${student.id}`}>
          <Button variant="contained" color="primary" className="editButton">Edit</Button>
          </Link>
          <Button variant="contained" color="secondary" className="deleteButton" onClick={() => handleDeleteStudent(student.id)}>Delete</Button>
      </div>
      
    </div>
  );
};

export default StudentView;