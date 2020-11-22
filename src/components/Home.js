import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'
import {Grid,Button,makeStyles} from '@material-ui/core';

const useStyles =makeStyles({
    link: {
      textDecoration: "none",
    },
  });
  function Home() {
    const classes = useStyles();
  
    
      return (
        
          <Fragment>
          
          <Grid item>
              <Link className={classes.link} to="/persondetails">
                <Button variant="contained" color="primary">
                  Person Details
                </Button>
              </Link>
            </Grid>
            <br/>
            <Grid item>
              <Link className={classes.link} to="/contactdetails">
                <Button variant="contained" color="primary">
                  Contact Details 
                </Button>
              </Link>
            </Grid>
            
            
          
          
            </Fragment>
    
          
      );
  }
  
  export default Home;