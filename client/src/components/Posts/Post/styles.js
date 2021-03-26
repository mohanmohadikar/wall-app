import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundBlendMode: 'darken',
    width: '100%'
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    marginTop: '5px',
    marginLeft: '5px',
    color: 'blue',
  },
  overlay2: {
    position: 'absolute',
    top: '10px',
    right: '0px',
    color: 'black',
  },
  profileImage: {
    borderRadius: '50px',
    width: '50px'
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '16px',
  },
  title: {
    paddingLeft: '16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  message: {
    marginTop: '-20px',
  },
  seprator: {
    alignSelf: 'center',
    height: '1px',
    background: 'rgba(0, 0, 0, 0.3)',
    width: '90%'
  }
});