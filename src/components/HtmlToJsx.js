import React from 'react'
import logoSrc from "../imageInSrc.jpg"
function HtmlToJsx() {
    return (
        <div>
            <div style={{border:"solid 1px black" , maxWidth:'100vw'}}>

                <h1 className="title red">Your name here</h1>

                <br/>

                <img src={logoSrc} alt="logo_react" />

                <br/>

                <img src="/imageInPublic.jpg" alt="another_logo"/>

            </div>

            <video width="320" height="240" controls>

            <source src="myVideo.mp4" type="video/mp4" /> 

            </video>
        </div>
    )
}

export default HtmlToJsx
