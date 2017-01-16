import * as React from "react";

let num:number;

num = 4;

interface ComponentProps {

}

export class MainComponent extends React.Component<ComponentProps, {}> {
    render() {
        return (
            <div>Ciao</div>
        );
    }
}