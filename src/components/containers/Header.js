/*==================================================
Header.js

It contains the Header component to be displayed on every page.
The header contains navigation links to every other page.
================================================== */
// Import "material" library for building UI with React components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

// Define styling for the header
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'sans-serif', 
    fontSize: '35px', 
    color: '#333333'
  },
  appBar:{
    backgroundColor: '#f7cac9',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  },
  headerButton: {
    marginRight: '10px',
    backgroundColor: '#e4f0d0', // Change the background color
    color: '#333333', // Change the text color
  },
}));

// Header component, displayed on every page
// Links to every other page
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            Campus Management System
          </Typography>

          <Link className={classes.links} to={'/'} >
            <Button variant="contained" className={classes.headerButton}>
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={'/campuses'} >
          <Button variant="contained" className={classes.headerButton}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
          <Button variant="contained" className={classes.headerButton}>
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );    
}

export default Header;
