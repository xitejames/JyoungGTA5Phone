import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Background from './Assets/Background.png'
import BottomBar from './Components/BottomBar';

const styles = makeStyles({
  root: {
    height: '98vh',
    width: '99vw',
  },
  phone: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundSize: 'cover',
    height: '500px',
    width: '275px',
    border: '10px solid black',
    borderRadius: '10px',
    position: 'absolute',
    left: 'calc(99vw - 285px);',
    top: 'calc(98vh - 510px);',
  },
  phoneApplications: {
    height: '93%',
    width: '100%',
  },
  bottomBarDiv: {
    backgroundColor: 'black',
    height: '7%',
    width: '100%',
  },
});

const App = () => {
  const classes = styles();
  return (
    <div className={classes.root}>

      <div className={classes.phone}>
        {/* 
          * APPLICATIONS BODY
        */}
        <div className={classes.phoneApplications}>
        </div>
        {/* 
          * BOTTOM BAR BACK - HOME - SETTINGS 
        */}
        <div className={classes.bottomBarDiv}>
          <BottomBar />
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(App);