/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Button, Typography, Card, CardContent, CardMedia, makeStyles } from '@material-ui/core';

// Define styles using makeStyles
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
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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

const CampusView = (props) => {
  const { campus } = props;
  const history = useHistory();
  const classes = useStyles();

  const nowDeleteCampus = async (id) => {
    try {
      const response = await fetch(`/api/campuses/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      history.push('/campuses'); // directs to campuses after delection
    } catch (error) {
      console.error("Failed to delete campus:", error);
    }
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={campus.imageUrl || 'https://placekitten.com/600/300'}
          title={campus.name}
        />
        <CardContent className={classes.content}>
          <Typography variant="h4" gutterBottom>
            {campus.name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Address: {campus.address}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {campus.description}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Campus ID: {campus.id}
          </Typography>
          <div className={classes.buttonContainer}>
            <Link to={`/editcampus/${campus.id}`} style={{ textDecoration: 'none' }}>
              <Button variant="contained" className={classes.editButton}>
                Edit
              </Button>
            </Link>
            <Button
              variant="contained"
              className={classes.deleteButton}
              onClick={() => nowDeleteCampus(campus.id)}
            >
              Delete
            </Button>
          </div>
          <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
            Enrolled Students
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Number of Students: {campus.students.length}
          </Typography>
          {campus.students.length === 0 ? (
            <Typography variant="body2" color="textSecondary" className={classes.noStudents}>
              No enrolled students
            </Typography>
          ) : (
            campus.students.map(student => (
              <Link key={student.id} to={`/student/${student.id}`} className={classes.studentLink}>
                {student.firstname} {student.lastname}
              </Link>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CampusView;
