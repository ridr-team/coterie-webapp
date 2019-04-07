import React from 'react'
import '../../HomeView.scss'
import {IntroComponent}  from './IntroComponent'
import {FeatureComponent}  from './FeatureComponent'
import {TeamComponent} from './TeamComponent'
import {FooterComponent} from './FooterComponent'

export class HomeView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <IntroComponent/>
                <FeatureComponent/>
                <TeamComponent/>
            </div>

        )
    }
}

export default HomeView
