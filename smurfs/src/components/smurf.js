import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin:"3%"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Smurf(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.smurf.name}
        </Typography>
        <Typography variant="body2" component="p">
            Age: {props.smurf.age}<br/>
            Height: {props.smurf.height}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => {props.removeSmurf(props.smurf.id)}}>Remove</Button>
      </CardActions>
    </Card>
  );
}