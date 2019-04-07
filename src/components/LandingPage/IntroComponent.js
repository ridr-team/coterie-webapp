/**
 * Created by Ishan on 11/27/2017.
 */
import React from 'react'
import '../../HomeView.scss'

export const IntroComponent = () => (
    <section className="main">
        <div className="textClass intro">
            <p>
                Co-existance simplified.</p>
            <p>Add your roommates. Share chores. Simplify your living in a shared apartment.</p>
            <p>coterie manages the mundane stuff.</p>
            <img src={require('./assets/screen_portrait.png')}/>
        </div>
    </section>
);
