import React from 'react';


export default function LIWOOInfo(){
    return(
        <div style={{width : '96%', height: '90%', border:"1px solid black",position: 'absolute', left : '2%'}}>
            <div style={{width: '30%', height: '30%', float: 'left',}}>
                <a href="https://www.youtube.com/channel/UCTigVbNdTjgtLexOLGH3AlA/videos?view=0&sort=dd&flow=grid">
                    <img src = "https://yt3.ggpht.com/a/AATXAJyaFjZ6kxRCXykhvD_STNBDsDKK5RQ949lNKg=s288-c-k-c0xffffffff-no-rj-mo" style={{width:"100%", objectFit : "cover", borderRadius:'50%'}} alt ="맛객리우"></img>
                </a>
            </div>
            <div style={{width: '70%', height: '30%', backgroundColor: 'yellow', float: 'left',fontFamily: '    Roboto, Arial, sans-serif'}}>
                <h1>맛객리우A foodie</h1>
                <h4>구독자 9.99만명</h4>
                <a href="https://www.youtube.com/channel/UCTigVbNdTjgtLexOLGH3AlA/videos?view=0&sort=dd&flow=grid"><img src="//s2.googleusercontent.com/s2/favicons?feature=youtube_channel&domain_url=https%3A%2F%2Fwww.youtube.com" style={{width: '10%'}} alt="유튜브"/></a>
                <a href ="https://www.instagram.com/liwoo_foodie/" style ={{fontSize:""}}><img src ="//s2.googleusercontent.com/s2/favicons?feature=youtube_channel&domain_url=https%3A%2F%2Fwww.instagram.com" style={{width: '10%'}} alt="인스타그램"/>Instagram</a>
            </div>
            <div style={{width: '100%', height: '70%',position: 'absolute', top:'30%', backgroundColor: 'gray'}}>
                나무위키 정보
            </div>
        </div>
    )
} 