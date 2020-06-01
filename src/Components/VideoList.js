import React from 'react';

export default function VideoList(title, href, restaurantInfo){
  return (
  <div>
    <div
      style={{
        width: '96%',
        height:'25%',
        marginLeft:'2%',
        float:'left',
        borderRadius:'5px',
        border: '1px solid black',
        marginTop: '3px',
      }}
    >
      <div
        style={{
          width: '48%',
          height:'100px',
          float:'left',
          marginLeft: '2%',

        }}
      >
        <iframe style={{width:"100%", height:"96%", marginTop:"1%"}} src={href} title ={title} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen="allowfullscreen"></iframe>
      </div>
      <div
        style={{
          width: '48%',
          height:'100px',
          float:'left',
          listStyle:'none',
        }}
      >
        <div style={{height:'80%', overflow:"hidden", fontSize:'0.9rem'}}>
          <li>{title}</li>
        </div>
        <div style={{height:'20%', fontSize:'1rem' }}>
          <li><a href ={restaurantInfo}>식당정보</a></li>
        </div>
      </div>
    </div>
  </div>
  );
}




