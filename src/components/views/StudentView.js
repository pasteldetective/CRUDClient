/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single student view page.
================================================== */
import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Button, Typography, Card, CardContent, CardMedia, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    maxWidth: 600, // fix width of card
    width: '100%', // full width of its container
    marginBottom: theme.spacing(2),
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f5f5e9', 
    borderRadius: '15px',
    border: '4px solid #ccccc0',
  },
  media: {
    height: 300,
  },
  content: {
    padding: theme.spacing(2),
  },
  description: {
    margin: theme.spacing(2, 0),
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    '& > *': {
      marginRight: theme.spacing(1),
    },
  },
  studentLink: {
    display: 'block',
    padding: theme.spacing(1),
    backgroundColor: '#e4f0d0',
    borderRadius: '5px',
    margin: theme.spacing(1, 0),
    textDecoration: 'none',
    color: '#333',
    '&:hover': {
      backgroundColor: '#cbe1a3',
    },
  },
  noStudents: {
    marginTop: theme.spacing(2),
  },
  editButton: {
    backgroundColor: '#fcb6bb',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#f7a6a6',
    },
  },
  deleteButton: {
    backgroundColor: '#904c77',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#612F4F',
    },
  },
}));

const StudentView = (props) => {
  const { student } = props;
  const history = useHistory();
  const classes = useStyles();

  const handleDeleteStudent = async (id) => {
    try {
      const response = await fetch(`/api/students/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      history.push('/students'); // direct to list of students 
    } catch (error) {
      console.error("Failed to delete student:", error);
    }
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={student.imageURL || 'https://placekitten.com/600/300'}
          title={student.firstname + " " + student.lastname}
        />
        <CardContent className={classes.content}>
          <Typography variant="h4" gutterBottom>
            {student.firstname + " " + student.lastname}
          </Typography>
          {student.campus ? (
            <Typography variant="body1" color="textSecondary">
              Campus: {student.campus.name}
            </Typography>
          ) : (
            <Typography variant="body1" color="textSecondary">
              No Campus
            </Typography>
          )}
          <Typography variant="body1" color="textSecondary">
            Email: {student.email}
          </Typography>
          {student.gpa ? (
            <Typography variant="body1" className={classes.description}>
              GPA: {student.gpa}
            </Typography>
          ) : (
            <Typography variant="body1" className={classes.description}>
              GPA: Not Available
            </Typography>
          )}
          <div className={classes.buttonContainer}>
            <Link to={`/editstudent/${student.id}`} style={{ textDecoration: 'none' }}>
              <Button variant="contained" className={classes.editButton}>
                Edit
              </Button>
            </Link>
            <Button
              variant="contained"
              className={classes.deleteButton}
              onClick={() => handleDeleteStudent(student.id)}
            >
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentView;
