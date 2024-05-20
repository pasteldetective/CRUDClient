/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Typography, Card, CardContent, CardMedia, Grid} from '@material-ui/core';
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
  media: {
    height: 170,
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
}));

const CampusCard = ({ campus }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} 
        image={campus.imageUrl || 'https://placekitten.com/200/140'} title={campus.name} />
        <CardContent>
          <Link to={`/campus/${campus.id}`}>
            <Typography gutterBottom variant="h5" component="h2">{campus.name}</Typography>
          </Link>
          <Typography variant="body2" color="textSecondary" component="p">{campus.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const AllCampusesView = ({ allCampuses }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {allCampuses.length === 0 ? (
      <Typography variant="h6" className={classes.noCampuses}>
        There are no campuses.
      </Typography>
      ) : (
      <Grid container className={classes.gridContainer} spacing={3}>
        {allCampuses.map(campus => (
          <CampusCard key={campus.id} campus={campus} />
        ))}
      </Grid>
      )}
      <Link to={`/newcampus`}>
        <Button variant="contained" className={classes.addButton}>Add New Campus</Button>
      </Link>
      <h1></h1>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;