import Draggable from 'react-draggable'; // The default
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Page1 extends Component {
    render() {
        return (
            <div className="page1">
                <div className="container">
                    <div className="content">
                        <div className="page-enter">
                            <Link to="page2">make your Polaroid Story</Link>
                            
                        </div>
                    </div>
                    <div className="footer">
                        <span className="footer-homepage fr">homepage of Polaroid memory.</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page1;
