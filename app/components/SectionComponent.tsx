import * as React from "react";

interface SectionComponentProps {
}

export class SectionComponent extends React.Component<SectionComponentProps, {}> {
    render() {
        return (
            <div className="SectionComponent">
                { this.props.children }
            </div>
        );
    }
}