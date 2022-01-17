import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const styles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  bottomBarBackParent: {
    height: '100%',
    width: '30%',
    margin: 'auto',
  },
  bottomBarBack: {
    display: 'block',
    justifyContent: "center",
    alignItems: "center",
    margin: 'auto',
    color: 'white',
  },
  bottomBarHomeParent: {
    height: '100%',
    width: '30%',
    margin: 'auto',
  },
  bottomBarHome: {
    display: 'block',
    justifyContent: "center",
    alignItems: "center",
    margin: 'auto',
    color: 'white',
  },
  bottomBarConfigParent: {
    height: '100%',
    width: '30%',
    margin: 'auto',
  },
  bottomBarConfig: {
    display: 'block',
    justifyContent: "center",
    alignItems: "center",
    margin: 'auto',
    color: 'white',
  }
});

const BottomBar = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
        <div className={classes.bottomBarBackParent}>
          <IconButton className={classes.bottomBarBack}><ArrowBackIosIcon /></IconButton>
        </div>
        <div className={classes.bottomBarHomeParent}>
          <IconButton className={classes.bottomBarHome}><HomeIcon /></IconButton>
        </div>
        <div className={classes.bottomBarConfigParent}>
          <IconButton className={classes.bottomBarConfig}><SettingsIcon /></IconButton>
        </div>
      </div>
  )
}

export default withStyles(styles)(BottomBar);