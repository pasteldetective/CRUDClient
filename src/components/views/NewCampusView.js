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

const NewCampusView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = useStyles();

  const [formData, setFormData] = useState({ name: '', imageUrl: '', address: '', description: '' });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

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

  const onSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;

    ['name', 'address'].forEach(field => {
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
      <h1>Add a New Campus Here</h1>
      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#333333' }}>
              Add a Campus
            </Typography>
          </div>
          <form style={{ textAlign: 'center' }} onSubmit={onSubmit}>
            <TextField
              label="Name of Campus"
              name="name"
              value={formData.name}
              onChange={onChange}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Provide Image URL"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={onChange}
              error={!!errors.imageUrl}
              helperText={errors.imageUrl}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Provide Address"
              name="address"
              value={formData.address}
              onChange={onChange}
              error={!!errors.address}
              helperText={errors.address}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Provide Description"
              name="description"
              value={formData.description}
              onChange={onChange}
              error={!!errors.description}
              helperText={errors.description}
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

export default NewCampusView;
