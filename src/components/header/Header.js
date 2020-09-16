import React from 'react';
import './header.css';


const header = () => {
    return ( 
        <div className="header">
           <div className="container">
              <div className="row">
                 <div className="col-md-7">
                   <h1>Become the next<br/> react ninja</h1>
                   <p> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt 
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem 
                      </p>

                      <button className="btn-m">Get started</button>
                 </div>
                 <div className="col-md-4">
                 <div className="icons8-react"></div>
                 </div>
              </div>
           </div>
        </div>
     );
}
 
export default header;
