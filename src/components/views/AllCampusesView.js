/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import defaultCampusImage from "./defaultCampusImage.jpg"; // Import a default campus image

const AllCampusesView = (props) => {
  // If there is no campus, display a message.
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  // Handle campus deletion
  const handleDelete = (campusId) => {
    if(window.confirm("Are you sure you want to delete this campus?")) {
      onDeleteCampus(campusId);
    }
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>campus id: {campus.id}</h4>
          <img
            src={campus.image || defaultCampusImage}
            alt = "Campus"
            style = {{maxWidth: "100%", height: "auto", marginBottom: "10px"}}
          />
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <button onClick={() => handleDelete(campus.id)} style={{ marginRight: "10px" }}>
            Delete
          </button>
          <hr/>
        </div>
      ))}
      <br/>
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      <br/><br/>
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;