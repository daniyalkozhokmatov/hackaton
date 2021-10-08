import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import future from '../img/future.jpg'
import './StarShip.scss';
import { Rating } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function StarShip() {
  const [expanded, setExpanded] = React.useState(false);
  const [like, setLike] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleLike = () => {
    setLike(prevState => !like)
  };

  return (
    <div className="Card1">
      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={future} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Daniyal"
        subheader="September 14, 2021"
      />
              <Rating name="size-medium" defaultValue={2} />

      <CardMedia
        component="img"
        height="450"
        image="https://observer.com/wp-content/uploads/sites/2/2021/02/EtoGL_iWQAkSWFG.jpeg?quality=80&strip"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Сегодня, после череды дежурных переносов, SpaceX запустила в небо прототип космического корабля Starship SN8 для испытательного полета на высоту 12,5 километров.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon 
          onClick={() => handleLike()}
          size="small"
          color= {like ? "secondary" : "primary"}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <div>
        <a href="#" class="a-btn-3">
<span class="a-btn-3-text">Price</span>
<span class="a-btn-3-slide-text">8909$</span>
<span class="a-btn-3-icon-right"><span></span></span>
</a>
            </div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
       
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          Взлет прошел штатно: один из трех двигателей Raptor отключился примерно через две минуты полета, затем, спустя еще примерно три минуты, отключился второй, а потом и третий. Starship занял горизонтальное положение, а потом начал снижаться.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
    </div>
    </div>
  );
}
