import React from 'react';
import './video.css'

const video = ({title,thumbnail,id}) => {
    return (  
        <div className="col-md-4"> 
        <a href={`https://www.youtube.com/watch?v=${id}`}><div className="card" >
  <img src={thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">{title}</p>
  </div>
  </div></a>
        </div>
    );
}
 
export default video;