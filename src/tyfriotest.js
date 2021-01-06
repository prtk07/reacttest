import React, { Component } from 'react';
import image1 from "./logo.svg";

export class tyfriotest extends Component {
    

    render() {
        return (
        <div>
            <div >
                <div>
                <div>
                    <img src ={image1} alt={"none"} />
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>How it Works</li>
                            <li>Contact us?</li>
                            <li>Sign-up</li>
                            <li>Sign-in</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="maincontent" > 
            <img src={image1} style={{width: 100, height: 200}} alt={"none"} />
 
            <pre>
                <p>
                <b>TYFRIO</b> is the easiest way to 
                grow fresh and healthy crops at your home
                </p>
            </pre>
            <pre>
            <p> 
                Sign-up to know how we are bringing agriculture to your house
                
            </p>
            </pre>
        </div>
    </div>
        )
    }
}

export default tyfriotest
