import React, { Component } from 'react';
import '../../HomeView.scss'
class Footer extends Component {

  render() {
    return (
      <footer className="footer main">
        <div className="row">
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Cool stuff</a></li>
              <li><a className="text-muted" href="#">Random feature</a></li>
              <li><a className="text-muted" href="#">Team feature</a></li>
              <li><a className="text-muted" href="#">Stuff for developers</a></li>
              <li><a className="text-muted" href="#">Another one</a></li>
              <li><a className="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>API</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Resource</a></li>
              <li><a className="text-muted" href="#">Resource name</a></li>
              <li><a className="text-muted" href="#">Another resource</a></li>
              <li><a className="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Career</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Jobs</a></li>
              <li><a className="text-muted" href="#">News</a></li>
              <li><a className="text-muted" href="#">Blog</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Team</a></li>
              <li><a className="text-muted" href="#">Locations</a></li>
              <li><a className="text-muted" href="#">Privacy</a></li>
              <li><a className="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
          </div>
          <section>
              <p className="footer-copyright">© 2017 Coterie, Inc.</p>
              <div className="footerImage">
                  <a href="/">
              <img src={require('../LandingPage/assets/logo.png')}/>
                      </a>
                  </div>
          </section>


      </footer>

    )
  }
}

export default Footer;
