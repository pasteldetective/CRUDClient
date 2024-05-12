/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  //needs to link to the campus page***
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <img src={student.imageUrl}/>
      <p>{"First name: " + student.firstname}</p>
      <p>{"Last name: " + student.lastname}</p>
      <p>{"Email: " + student.email}</p>
      <p>{"GPA: " + student.gpa}</p>
      <h3>{"Attends: " + student.campus.name}</h3>
    </div>
  );

};

export default StudentView;