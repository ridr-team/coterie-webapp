import React, { Component } from 'react';
import { Route } from "react-router-dom";
import RouterConfig from '../../config/routes'

class ComponentRouter extends Component {

  configureRoutes = () => {
    return RouterConfig.map( route => {
      return (<Route path={route.path} component={route.component} />)
    });
  }

  render() {
    return (
      <div>
        {this.configureRoutes()}
      </div>
    )
  }
}

export default ComponentRouter;
