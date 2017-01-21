import * as React from "react";

import { SectionComponent } from './SectionComponent';
import { NameComponent } from './sections/NameComponent';
import { BiographyComponent } from './sections/BiographyComponent';

interface ComponentProps {

}

export class MainComponent extends React.Component<ComponentProps, {}> {
    render() {
        return (
            <div className="MainComponent">
                <SectionComponent>
                    <NameComponent/>
                </SectionComponent>
                <SectionComponent>
                    <BiographyComponent/>
                </SectionComponent>
            </div>
        );
    }
}