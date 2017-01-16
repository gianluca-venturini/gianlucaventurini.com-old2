import * as React from "react";

import { SectionComponent } from './SectionComponent';
import { NameComponent } from './sections/NameComponent';

interface ComponentProps {

}

export class MainComponent extends React.Component<ComponentProps, {}> {
    render() {
        return (
            <SectionComponent>
                <NameComponent/>
            </SectionComponent>
        );
    }
}