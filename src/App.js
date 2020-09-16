import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './components/videos/Video';
import Header from './components/header/Header';


//apikey AIzaSyDy0FmgDrd7GJBxIjPtKOZC8MaCBL-pIOc//

function App() {
  const [video ,setVideo] = useState([]);
 
  useEffect(()=>{
    fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&key=AIzaSyDy0FmgDrd7GJBxIjPtKOZC8MaCBL-pIOc')
    .then(res=> res.json())
    .then(data => setVideo(data.items))
   },[]);
  return (
    <div className="container">
       <Header/>
      <div className="row top">
     {video.map((item )=>
      <Video key={item.id} title={item.snippet.title} thumbnail={item.snippet.thumbnails.medium.url} id={item.snippet.resourceId.videoId} />
      
  )})
      </div>  
    </div>
  );
}

export default App;
