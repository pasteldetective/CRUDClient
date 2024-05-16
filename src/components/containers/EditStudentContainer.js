import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";
import { editStudentThunk } from "../../store/thunks";
import { fetchAllCampusesThunk } from "../../store/thunks";
import EditStudentView from "../views/EditStudentView";
import { Redirect } from 'react-router-dom';

class EditStudentContainer extends Component {
  // Get student data from back-end database
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
    this.props.fetchAllCampuses();
  }

  constructor(props){
    super(props);
    
    let student = this.props.student

    this.state = {
      student: student,
      firstname: student.firstname,
      lastname: student.lastname,
      campusId: student.campusId,
      imageURL: student.imageURL,
      gpa: student.gpa,
      email: student.email,
      studentId: student.id, 
      redirect: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Take action after user click the submit button
  handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.
    
    if(!(this.props.allCampuses.map(({id}) => id)).includes(parseInt(this.state.campusId))){
      alert("The provided Campus ID is invalid. Please input a valid Campus ID.")
      this.setState({
        redirect: false
      })
    }
    else{
      let student = this.state.student
      student.firstname = this.state.firstname
      student.lastname = this.state.lastname
      student.campusId = this.state.campusId
      student.imageURL = this.state.imageURL
      student.gpa = this.state.gpa
      student.email = this.state.email
 
      await this.props.editStudent(student);

      // Update state, and trigger redirect to show the new student.
      this.setState({
        firstname: '', 
        lastname: '', 
        campusId: '', 
        email: '',
        imageURL: '',
        gpa: '',
        redirect: true
      });
    }
  }

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.props.match.params.id}`}/>)
    }
    return (
      <div>
        <Header />
        <EditStudentView student={this.props.student} 
        handleChange = {this.handleChange} 
        handleSubmit={this.handleSubmit}
        allCampuses={this.props.allCampuses}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,
    allCampuses: state.allCampuses, 
  };
};

// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};


// Export store-connected container by default
// StudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(EditStudentContainer);