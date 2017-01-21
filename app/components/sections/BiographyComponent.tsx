import * as React from "react";

interface NameComponentProps {

}

export class BiographyComponent extends React.Component<NameComponentProps, {}> {
    render() {
        return (
            <div className="BiographyComponent">
                <img src="./images/me.jpg" className="portrait"/>
                <div className="description">
                    <p className="name">Hi, I’m Gianluca.</p>
                    <p className="biography">I am a highly ambitious Full Stack Web Engineer with a strong background in Computer Science and Computer Engineering. I always challenge myself in order to improve my technical skills and learn about new topics. I’m passionate about Data Visualization, Design, Electronics and Human Computer Interaction.</p>
                </div>
                <div className="information">
                    <div className="info">
                        <img src="./images/san_francisco.png"/>
                        <span>I'm based in San Francisco</span>
                    </div>
                    <div className="info">
                        <img src="./images/dropbox.png"/>
                        <span>I'm currently working at Dropbox</span>
                    </div>
                </div>
            </div>
        );
    }
}