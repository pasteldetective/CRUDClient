/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import { Card, CardContent, Typography, Button, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const cardStyle = {
  backgroundColor: '#f5f5e9',
  color: '#333333',
};


const HomePageView = () => {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}> 
      <h1>Welcome to Campus Management System</h1>
      <Card variant="outlined" style={{ ...cardStyle, marginBottom: '20px' }}> 
        <CardContent>
          <Typography variant="h5" component="h2">
            Find Campuses
          </Typography>
          <Typography variant="body2" component="p">
            Explore different campuses and their details.
          </Typography>
          <Divider style={{ margin: '10px 0' }} />
          <Button 
            component={Link} 
            to="/campuses" 
            variant="contained" 
            style={{
              marginRight: '10px',
              backgroundColor: '#fcb6bb', // Background color
              color: 'white', // Text color
              '&:hover': {
                backgroundColor: '#f7a6a6', // Hover background color
              },
            }}
          >
            Explore Campuses
          </Button>
        </CardContent>
      </Card>
      <Card variant="outlined" style={cardStyle}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Discover Students
          </Typography>
          <Typography variant="body2" component="p">
            Discover students enrolled in campuses.
          </Typography>
          <Divider style={{ margin: '10px 0' }} />
          <Button 
            component={Link} 
            to="/students" 
            variant="contained" 
            style={{
              marginRight: '10px',
              backgroundColor: '#fcb6bb', // Background color
              color: 'white', // Text color
              '&:hover': {
                backgroundColor: '#f7a6a6', // Hover background color
              },
            }}
          >
            Explore Students
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default HomePageView;