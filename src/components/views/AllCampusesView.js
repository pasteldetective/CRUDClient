/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Typography, Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    paddingTop: theme.spacing(4),
    color: '#ffffff',
  },
  gridContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: 'auto',
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
    backgroundColor: '#f5f5e9', 
    borderRadius: '15px',
  },
  media: {
    height: 140,
  },
}));

const CampusCard = ({ campus }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={campus.imageUrl || 'https://placekitten.com/200/140'} title={campus.name} />
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
      <Grid container className={classes.gridContainer} spacing={3}>
        {allCampuses.map(campus => (
          <CampusCard key={campus.id} campus={campus} />
        ))}
      </Grid>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;