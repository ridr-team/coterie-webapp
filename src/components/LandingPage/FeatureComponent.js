/**
 * Created by Ishan on 11/27/2017.
 */
import React from 'react'
import '../../HomeView.scss'

export const FeatureComponent = () => (
    <section className="features main" id="features">
        <div className="featureList">
            <div className="featureDetails">
                <div className="featureImage">
                    <img src={require('./assets/create-group.svg')}/>
                    <h2 className="textClass">Create your coterie</h2>
                    <p>Create a group with your roommates or colleagues.</p>
                </div>
            </div>
            <div className="featureDetails">
                <div className="featureImage">
                    <img src={require('./assets/tasks.svg')}/>
                    <h2 className="textClass">Add your shared chores</h2>
                    <p>Choose who all you want to share that chore with, pick a start date and repeat cycle.</p>
                </div>
            </div>
            <div className="featureDetails">
                <div className="featureImage">
                    <img src={require('./assets/notification.svg')}/>
                    <h2 className="textClass">Get Notifications</h2>
                    <p>Get timely notifications for your tasks.</p>
                </div>
            </div>
            <div className="featureDetails">
                <div className="featureImage">
                    <img src={require('./assets/calendar.svg')}/>
                    <h2 className="textClass">Calendar</h2>
                    <p>Keep track of upcoming tasks.</p>
                </div>
            </div>
            <div className="featureDetails">
                <div className="featureImage">
                    <img src={require('./assets/chat.svg')}/>
                    <h2 className="textClass">Chat</h2>
                    <p>Chat within your group!</p>
                </div>
            </div>
        </div>
    </section>
);
