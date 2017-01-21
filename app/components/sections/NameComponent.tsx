import * as React from "react";

interface NameComponentProps {

}

export class NameComponent extends React.Component<NameComponentProps, {}> {
    render() {
        return (
            <div className="NameComponent">
                <div className="background-image"/>
                <span className="name">GIANLUCA VENTURINI</span>
            </div>
    );
    }
}