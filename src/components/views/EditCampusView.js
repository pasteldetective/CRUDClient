import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form.
const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const EditCampusView = (props) => {
  const {handleChange, handleSubmit, campus } = props;
  const classes = useStyles();

  // Render Edited Campus view with an input form
  return (
    <div style={{position: 'relative', top: '58px', width: '100vw'}}>
      <h1 style={{color: '#63229A'}}>{campus.name}</h1>

      <div className={classes.root}>
        <div className={classes.formContainer} id="formBox">
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '25px', color: 'white'}}>
              Edit Campus
            </Typography>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Name: </label>
            <input placeholder={campus.name} type="text" name="name" onChange ={(e) => handleChange(e)}/>
            
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Address: </label>
            <input placeholder={campus.address} type="text" name="address" onChange={(e) => handleChange(e)}/>
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Image Url: </label>
            <input placeholder={campus.imageUrl} type="text" name="imageUrl" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
            <input placeholder={campus.description} type="text" name="description" onChange={(e) => handleChange(e)}/>
            <br/>
            <br/>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
          </form>
          </div>
      </div>
    </div>    
  )
}

export default EditCampusView;