import React, { Component } from 'react';
import '../App.css';
import VideoAtTheBottom from '../Components/VideoAtTheBottom.js';
import videos from '../video.js';
import YoutubePopUp from '../Components/YoutubePopUp.js';
import { withStyles } from '@material-ui/core/styles';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ncpClientId from '../ClientId.js';

const styles = theme =>({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit*3,
    overFlowX:"auto"
  }
})

function NaverMapAPI(locationX, locationY, stateI) {
  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'}
      style={{
        width: '95%',
        height: '95%',
        margin: 'auto',
        border: '1px solid black',
        position: 'sticky',
        top: '4px',
        zIndex : 2
      }}
      center={{lat : locationX , lng: locationY  }}
      defaultZoom={13}
    >
      {
      videos.map((v,videoIndex)=>{
        return(
          <div>
            {<YoutubePopUp
              id = {v.id}
              title ={v.title}
              href = {v.href}
              restaurantInfo = {v.restaurantInfo}
              locationX = {v.locationX}
              locationY = {v.locationY}
              stateI ={stateI}
              videoIndex ={videoIndex}
            />}
          </div>
        )
      })
      }
    </NaverMap>
  );
}

class Map extends Component {
  componentDidMount(){
    this.timer = setInterval(this.progress, 20)
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err=>console.log(err));
  }

  callApi = async() =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  constructor(props){
    super(props);
    this.state={
      i:-1,
      locationX:videos[0].locationX,
      locationY:videos[0].locationY,
      displayVATB:null,
      displayButtonVATB:'none',
      VATBWidth:'80%',
      VATBHeight:'40%'
    };
  }
  render(){

    return (
      <div
        style={{
          height:'90%',
          width: '100%',
          position : 'absolute',
          left : 0

        }}
      >
        <YouTubeIcon style={{
            position: 'fixed',
            right: '2%',
            top: '1%',
            zIndex: 150,
            fontSize: 50,
          }}
          onClick={()=>{
            this.state.displayVATB!=='none'?this.setState({
              displayVATB:'none',
              displayButtonVATB:null,
              VATBWidth:'0%',
              VATBHeight:'0%'}):this.setState({
                displayVATB:null,
                displayButtonVATB:'none',
                VATBWidth:'80%',
                VATBHeight:'40%'
              })
          }}
        />
        <RenderAfterNavermapsLoaded
          ncpClientId={ncpClientId}
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <div style ={{
            width : '100%',
            height : '100%',
            top : '4px',
            backgroundColor : 'white',
            zIndex: 2
          }}
          >
            {NaverMapAPI(this.state.locationX, this.state.locationY, this.state.i)}
          </div>
        </RenderAfterNavermapsLoaded>
        {
          <div style ={{
            paddingLeft : '5px',
            position : 'fixed',
            bottom: '10%',
            zIndex : 100,
            width : this.state.VATBWidth,
            left : '10%',
            height: this.state.VATBHeight,
            display: this.state.displayVATB,
          }}
          >
            <NavigateBeforeIcon style ={{
              position : 'absolute',
              left : '-10%',
              top : '45%',
              fontSize: 50
            }}
              onClick ={()=> {
                const {i} = this.state;
                if(this.state.i===-1){
                  this.setState({
                    i: videos.length-2,
                    locationX: videos[videos.length-1].locationX,
                    locationY: videos[videos.length-1].locationY
                  });
                }
                else{this.setState({
                  i:i-1,
                  locationX: videos[i].locationX,
                  locationY: videos[i].locationY
                  });
                }
            }}/>
            {<VideoAtTheBottom
              i = {this.state.i}
            />}
            <NavigateNextIcon style ={{
              position : 'absolute',
              right : '-10%',
              top : '45%',
              fontSize : 50,
            }}
              onClick ={()=> {
                const {i} = this.state;
                if(this.state.i>videos.length-3){
                  this.setState({
                    i:-1,
                    locationX: videos[0].locationX,
                    locationY: videos[0].locationY
                  });
                }
                else{this.setState({
                  i:i+1,
                  locationX: videos[i+2].locationX,
                  locationY: videos[i+2].locationY
                });
                }
              }}
            />
          </div>
        }
      </div>
    );
  }
}

export default withStyles(styles)(Map);
