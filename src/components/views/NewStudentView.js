/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import { Button } from "@material-ui/core";
import { makeStyles, Typography, TextField } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f5f5e9',
    borderRadius: '5px',
    margin: 'auto',
    padding: '20px',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  },
  customizeAppBar: {
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle: {
    backgroundColor: '#f7cac9',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
  submitButton: {
    backgroundColor: '#e4f0d0',
    color: '#333333',
    '&:hover': {
      backgroundColor: '#C8D9AC',
    },
  },
}));

const NewStudentView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = useStyles();

  // state for form data and errors
  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', gpa: '', imageUrl: '', campusId: '' });
  const [errors, setErrors] = useState({});
  const [gpaErrorMessage, setGpaErrorMessage] = useState('');
  const [campusIdErrorMessage, setCampusIdErrorMessage] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // make input a number for campus id
    if (name === 'campusId') {
      if (!/^\d+$/.test(value)) {
        // 
        newValue = '';
        setCampusIdErrorMessage('Please enter only numbers for Campus ID.');
      } else {
        setCampusIdErrorMessage('');
      }
    }

    // 0-4 GPA
    if (name === 'gpa') {
      const parsedValue = parseFloat(value);
      if (isNaN(parsedValue) || parsedValue < 0 || parsedValue > 4) {
        // set it to an empty string if not 0 -4
        newValue = '';
        setGpaErrorMessage('Please enter a number between 0 and 4.');
      } else {
        setGpaErrorMessage('');
      }
    }

    setFormData(prev => ({ ...prev, [name]: newValue }));

    // Clear errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    handleChange(e);
  };

  const validateField = (name, value) => {
    let error = '';
    if (!value.trim()) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Need first, last, and email to be required to validate the form
  const onSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;

    ['firstname', 'lastname', 'email'].forEach(field => {
      if (!formData[field].trim()) {
        validateField(field, formData[field]);
        formIsValid = false;
      }
    });

    if (formIsValid) {
      handleSubmit(e, formData);
    }
  };

  return (
    <div>
      <h1>New Student</h1>
      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#333333' }}>
              Add a Student
            </Typography>
          </div>
          <form style={{ textAlign: 'center' }} onSubmit={onSubmit}>
            <TextField
              label="First Name"
              name="firstname"
              value={formData.firstname}
              onChange={onChange}
              error={!!errors.firstname}
              helperText={errors.firstname}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              name="lastname"
              value={formData.lastname}
              onChange={onChange}
              error={!!errors.lastname}
              helperText={errors.lastname}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={onChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              margin="normal"
            />
            <TextField
              label="GPA"
              name="gpa"
              value={formData.gpa}
              onChange={onChange}
              error={!!errors.gpa || !!gpaErrorMessage}
              helperText={errors.gpa || gpaErrorMessage}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Image URL"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={onChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Campus ID"
              name="campusId"
              value={formData.campusId}
              onChange={onChange}
              error={!!errors.campusId || !!campusIdErrorMessage}
              helperText={errors.campusId || campusIdErrorMessage}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" className={classes.submitButton} type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewStudentView;
