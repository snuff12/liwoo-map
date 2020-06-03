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
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';


const styles = theme =>({
  root:{
    width:'100%',
    marginTop: theme.spacing(3),
    overFlowX:"auto"
  }
})

function NaverMapAPI(locationX, locationY, stateI, 한식, 중식, 일식, 양식, 소고기, 뷔페, 술집, 디저트) {
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
          ((v.foodTypes==='한식'&&한식)||(v.foodTypes==='중식'&&중식)||(v.foodTypes==='일식'&&일식)||(v.foodTypes==='양식'&&양식)||(v.foodTypes==='소고기'&&소고기)||(v.foodTypes==='뷔페'&&뷔페)||(v.foodTypes==='술집'&&술집)||(v.foodTypes==='디저트'&&디저트))===true&&
          <div>
            <YoutubePopUp
              id = {v.id}
              title ={v.title}
              href = {v.href}
              restaurantInfo = {v.restaurantInfo}
              locationX = {v.locationX}
              locationY = {v.locationY}
              stateI ={stateI}
              videoIndex ={videoIndex}
            />
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
      displayVATB:true,
      displayButtonVATB:false,
      displaySelect:false,
      displaySelectButton:true,
      한식: true,
      중식: true,
      일식: true,
      양식: true,
      소고기: true,
      뷔페: true,
      술집: true,
      디저트: true,
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
      >{this.state.displaySelectButton===true&&<Fab color="primary" aria-label="add" style={{marginTop:'2%', marginLeft:'4%', zIndex:150, position:'fixed', fontSize:50}} onClick={()=>{this.setState({displaySelectButton:false, displaySelect:true})}}>
          <FavoriteIcon/>
        </Fab>}
        {this.state.displaySelect===true&&<div style ={{border:'1px solid black', borderRadius:'5px', paddingLeft:'1%', paddingTop:'1%', marginLeft:'5%', marginTop:'5%', position:'fixed', zIndex:150, backgroundColor:'ivory', width: '40%', height:'40%',overflow:"auto"}}>
          <FormControl component="fieldset">
            <FormLabel component="legend">음식 종류</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={this.state.한식} onChange={(event)=>{this.setState({[event.target.name] : event.target.checked})}} name="한식" />}
                label="한식"
              />
              <FormControlLabel
                control={<Switch checked={this.state.중식} onChange={(event)=>{this.setState({[event.target.name] : event.target.checked})}} name="중식" />}
                label="중식"
              />
              <FormControlLabel
                control={<Switch checked={this.state.일식} onChange={(event)=>{this.setState({[event.target.name] : event.target.checked})}} name="일식" />}
                label="일식"
              />
              <FormControlLabel
                control={<Switch checked={this.state.양식} onChange={(event)=>{this.setState({[event.target.name] : event.target.checked})}} name="양식" />}
                label="양식"
              />
              <FormControlLabel
                control={<Switch checked={this.state.소고기} onChange={(event)=>{this.setState({[event.target.name] : event.target.checked})}} name="소고기" />}
                label="소고기"
              />
              <FormControlLabel
                control={<Switch checked={this.state.디저트} onChange={(event)=>{this.setState({[event.target.name] : event.target.checked})}} name="디저트" />}
                label="디저트"
              />
              <FormControlLabel
                control={<Switch checked={this.state.뷔페} onChange={(event)=>{this.setState({[event.target.name] : event.target.checked})}} name="뷔페" />}
                label="뷔페"
              />
              <FormControlLabel
                control={<Switch checked={this.state.술집} onChange={(event)=>{this.setState({[event.target.name] : event.target.checked})}} name="술집" />}
                label="술집"
              />
              <FormControlLabel
                control={<Switch checked={this.state.displaySelect} onChange={(event)=>{this.setState({[event.target.name] : event.target.checked, displaySelectButton:true})}} name="displaySelect" />}
                label="숨기기"
              />
            </FormGroup>
          </FormControl>
        </div>}
        <YouTubeIcon style={{
            position: 'fixed',
            right: '2%',
            top: '1%',
            zIndex: 150,
            fontSize: 50,
          }}
          onClick={()=>{
            this.state.displayVATB===true?this.setState({
              displayVATB:false,
              displayButtonVATB:true,
              }):this.setState({
                displayVATB:true,
                displayButtonVATB:false,
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
            {NaverMapAPI(this.state.locationX, this.state.locationY, this.state.i, this.state.한식, this.state.중식, this.state.일식, this.state.양식, this.state.소고기, this.state.뷔페, this.state.술집, this.state.디저트)}
          </div>
        </RenderAfterNavermapsLoaded>
        {
          this.state.displayVATB===true&&<div style ={{
            paddingLeft : '5px',
            position : 'fixed',
            bottom: '10%',
            zIndex : 100,
            width : '80%',
            left : '10%',
            height: '40%',
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
