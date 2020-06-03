import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import videos from '../video.js';
import VideoList from '../Components/VideoList.js';

  class LIWOOYoutube extends React.Component {
    state = {
      items: Array.from({ length: 7 }),
      hasMore: true
    };
  
    fetchMoreData = () => {
      if (this.state.items.length >= videos.length) {
        this.setState({ hasMore: false });
        return;
      }
      setTimeout(() => {
        this.setState({
          items: this.state.items.concat(Array.from({ length: 2 }))
        });
      }, videos.length);
    };
  
    render() {
      return (
        <div style = {{width: '96%', height: '70%', border:'1px solid black', borderRadius:'10px', marginLeft:"2%",marginBottom:'60px', overflow:'hidden'}}>
          <div style ={{position: 'fixed', width: '100%',height: '12%', backgroundColor:'transparent' }}>
            <img src="http://yt3.ggpht.com/pefRXNgcJ9TwWeFSvSod0rAlVt27f5jxW4N_iM1OYkuF-UwDxZsD977PDkG2juyU-wo2tTPFug=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" width="96%" alt ="맛객리우 배너"/>
          </div>
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            style={{
              width:'100%',
              height:'60%',
              overflow:'auto',
              marginTop:'17%',
            }}
          >
            {this.state.items.map((i, index) => (
              videos[index] !==undefined ? VideoList(videos[index].title,videos[index].href, videos[index].restaurantInfo):<div></div>
            ))}
          </InfiniteScroll>
        </div>
      );
    }
  }
  
export default LIWOOYoutube