import { makeStyles } from '@material-ui/core/styles';
/*
Black (#101820FF) and Orange (#F2AA4CFF)
*/
export default makeStyles(() => ({
  appBar: {
    borderRadius: 5,
    marginBottom: '30px',
    display: 'flex',
    backgroundColor: '#EC6065',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#ffffff',
  },
  image: {
    marginLeft: '15px',
  },
}));