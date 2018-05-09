
//import ocean from './ocean.mp4';
import page1 from './page1.gif'
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Page1.css';
class Page1 extends Component {
    render() {
        return (
            <div className="page1">
                <div className="container">
                    <div className="content">
                        <div className="page-enter">
                            <Link to="page2">make your Polaroid Story</Link>
                        </div>
                        <img src={page1} alt = 'img'/>
                    </div>
                    <div className="footer">
                        <span className="footer-homepage fr">homepage of Polaroid memory.</span>

                    </div>

                </div>
            </div>
        );
    }
}

/*<video className="background-video" loop autoPlay>
      <source src={ocean} type="video/mp4" />
</video>*/

export default Page1;
