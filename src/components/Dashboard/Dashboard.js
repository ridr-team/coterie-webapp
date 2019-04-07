import React, { Component } from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ComponentRouter from '../Router/ComponentRouter';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Header/>
        <ComponentRouter/>
        <Footer/>
      </div>
    )
  }

}

export default Dashboard;
