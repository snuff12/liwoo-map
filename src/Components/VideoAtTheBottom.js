import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import videos from '../video.js';


class VideoAtTheBottom extends React.Component {
  render(){
  return (
  <div>
    <Card 
      style={{
        left : '-1%',
        width: '100%',
        height:'100%',
        paddingTop: '1%',
        paddingLeft: '1%',
        zIndex : 100,
        position : 'absolute',
        backgroundColor : 'ivory'
      }}
    >
      <CardMedia
        style={{
          height : '80%',
        }}
        title={videos[this.props.i+1].title}>
        {<iframe width="98%" height="100%" src={videos[this.props.i+1].href} title ={videos[this.props.i+1].title} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>}
      </CardMedia>
      <CardActions 
        disableSpacing
        style={{
          height:'10%'
        }}
        >
        <a href ={videos[this.props.i+1].restaurantInfo}>식당정보</a>
      </CardActions>
    </Card>
  </div>
  );}
}

export default VideoAtTheBottom;