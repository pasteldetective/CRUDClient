/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const darkCardStyle = {
  backgroundColor: '#333',
  color: '#fff',
};

const HomePageView = () => {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}> 
      <h1>Welcome to Campus Management System</h1>
      <Card variant="outlined" style={{ ...darkCardStyle, marginBottom: '20px' }}> 
        <CardContent>
          <Typography variant="h5" component="h2">
            Find Campuses
          </Typography>
          <Typography variant="body2" component="p">
            Explore different campuses and their details.
          </Typography>
          <Button component={Link} to="/campuses" variant="contained" color="primary">
            Explore Campuses
          </Button>
        </CardContent>
      </Card>
      <Card variant="outlined" style={darkCardStyle}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Discover Students
          </Typography>
          <Typography variant="body2" component="p">
            Discover students enrolled in various campuses.
          </Typography>
          <Button component={Link} to="/students" variant="contained" color="primary">
            Explore Campuses
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default HomePageView;