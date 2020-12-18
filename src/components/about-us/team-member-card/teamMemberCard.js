import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    
  },
  media: {
    height: 300,
  },
});

export default function TeamCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={()=>props.linkGithub}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.photo}
          title="Teammates"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.linkGithub}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
