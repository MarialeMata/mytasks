import React, { Component } from 'react';
import { Navbar, Header } from './containers/common';
import Routes from './Routes';
import { Container } from 'reactstrap';
import history from './utils/history';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Container className="mt-4 mb-4">
          <Header currentPath={history.location.pathname} />
          <Routes />
        </Container>
      </div>
    );
  }

}

export default App;