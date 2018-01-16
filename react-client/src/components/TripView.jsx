import React from 'react';
import EatView from './EatView.jsx';
import PartyView from './PartyView.jsx';
import SleepView from './SleepView.jsx';
import ExploreView from './ExploreView.jsx';
import navHeader from './navHeader.jsx'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class TripView extends React.Component {
  constructor(props) {
    super(props);
    this.onHomeClick = this.onHomeClick.bind(this);
  }

  onHomeClick(val) {
    this.props.changeTripView(val);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to={'/eat'}>Eat</Link>
                <Link to={'/party'}>Party</Link>
                <Link to={'/sleep'}>Sleep</Link>
                <Link to={'/explore'}>Explore</Link>
              </div>
            </div>
          </nav>
          <div>
            <Switch>
              <Route path="/eat" render={() => <EatView eat={ this.props.eat } />} />
              <Route path="/party" render={() => <PartyView party={ this.props.party } />} />
              <Route path="/sleep" render={() => <SleepView sleep={ this.props.sleep } />} />
              <Route path="/explore" render={() => <ExploreView explore={ this.props.explore } />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default TripView;