import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './ArtistCard.css'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345,
    maxHeight: 570,
    minHeight: 570
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ArtistCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [isFavorite, setFavorite] = React.useState(false)

  let addToFav = () => {
    setFavorite(!isFavorite)

  }
  return (
    <div
      onClick={(e) => props.onClick(e)}
      className="single" id={props.id}>
      <Card className={classes.root} id={props.id}>
        <CardHeader
          id={props.id}
          title={props.name.split(' ').slice(0, 2).join(' ')}
          subheader={props.descr}
        />
        <CardMedia
          id={props.id}
          className={classes.media}
          image="https://cdn1.savepice.ru/uploads/2020/12/17/547fe02a6cde4d7747db04ed87a45099-full.jpg"
          title="Paella dish"
        />
        <CardContent className="descr" id={props.id}>
        </CardContent>
        {props.header &&
          <div className="FavIcon">
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon onClick={addToFav} className={isFavorite ? "isFavorite" : "notFavorite"} />
              </IconButton>
            </CardActions>
          </div>}

      </Card>
    </div>
  );
}