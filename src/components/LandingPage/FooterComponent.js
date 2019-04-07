/**
 * Created by Ishan on 11/27/2017.
 */
import React from 'react'
import './Style/HomeView.scss'

export const FooterComponent = () => (
    <section className="footer main">
        <p className="footer-copyright">© 2017 Coterie, Inc.</p>
        <div className="footerImage">
            <a href="/">
        <img src={require('./assets/logo.png')}/>
                </a>
            </div>
    </section>
);
