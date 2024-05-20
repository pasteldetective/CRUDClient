/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Typography, Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    paddingTop: theme.spacing(4),
  },
  card: {
    maxWidth: 450,
    margin: theme.spacing(2),
    backgroundColor: '#f5f5e9',
    borderRadius: '15px',
    border: '4px solid #ccccc0',
  },
  gridContainer: {
    width: '100%',
    maxWidth: '1400px',
    margin: 'auto',
    padding: theme.spacing(2),
  },
  addButton: {
    backgroundColor: '#e4f0d0',
    color: '#333333',
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#C8D9AC',
    },
  },
  noStudents: {
    marginTop: theme.spacing(2),
  },
}));

// student card for indivudal rendering
const StudentCard = ({ student }) => {
  const classes = useStyles();
  const name = `${student.firstname} ${student.lastname}`;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent>
          <Link to={`/student/${student.id}`}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </Link>
          <Typography variant="body2" color="textSecondary" component="p">
            {student.email}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

// renders all students or no students are available
const AllStudentsView = ({ students }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {students.length === 0 ? (
        <Typography variant="h6" className={classes.noStudents}>
          There are no students.
        </Typography>
      ) : (
        <Grid container className={classes.gridContainer} spacing={3}>
          {students.map(student => (
            <StudentCard key={student.id} student={student} />
          ))}
        </Grid>
      )}
      <Link to={`/newstudent`}>
        <Button variant="contained" className={classes.addButton}>
          Add New Student Here
        </Button>
      </Link>
      <h2></h2>
    </div>
  );
};

AllStudentsView.propTypes = {
  students: PropTypes.array.isRequired,
};

export default AllStudentsView;