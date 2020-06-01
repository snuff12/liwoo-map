import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Marker } from 'react-naver-maps';


class YoutubePopUp extends React.Component{
  constructor(props){
    super(props);
    this.state={open: false};
  }
  
  render(){
    const handleClickOpen = () => {
      this.setState({
        open: true
      });
    };
    const handleClose = () => {
      this.setState({
        open:false
      });
    }
    const navermaps = window.naver.maps;
    return(
        <div>
          <Marker
            key ={this.props.id}
            position ={new navermaps.LatLng(this.props.locationX, this.props.locationY)}
            animation={this.props.stateI+1===this.props.videoIndex?1:0}
            onClick={handleClickOpen}
          />
          <Dialog
            open={this.state.open}
            onClose={handleClose}>
            <DialogTitle>{this.props.title}</DialogTitle>
            <DialogContent>
            <iframe width="100%" height="180px" src={this.props.href} title ={this.props.title} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </DialogContent>
            <DialogActions>
              <a href = {this.props.restaurantInfo}>식당정보</a>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

  export default YoutubePopUp