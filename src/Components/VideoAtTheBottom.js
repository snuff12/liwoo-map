import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import videos from '../video.js';


class VideoAtTheBottom extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayVideo: null,
      displayButton: 'none'
     }
  }
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
        backgroundColor : 'ivory',
        display: this.state.displayVideo
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
        <a width="20%" href ={videos[this.props.i+1].restaurantInfo}>식당정보</a>
        <button style={{marginLeft:'60%', width:'20%'}} onClick={()=>{
          this.setState({displayVideo:'none', displayButton:null})
        }}>숨기기</button>
      </CardActions>
    </Card>
    <button style={{marginLeft: '40%', marginTop:"70%", width:'20%', display:this.state.displayButton }} onClick={()=>{
      this.setState({displayVideo:null, displayButton:'none'})
    }}>영상 보기</button>

  </div>
  );}
}

export default VideoAtTheBottom;