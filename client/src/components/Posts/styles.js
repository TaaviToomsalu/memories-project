import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column-reverse'
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse'
    }
  }
}));