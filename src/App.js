import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 9;

  state = {
    progress:0
  }
  setProgress =(progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (

      <div>
        <Router>
          <Navbar />
          <LoadingBar height={3} color="#ff0000" progress={this.state.progress} />
          <Route exact path="/">
            <News setProgress={this.setProgress}
              key="general"
              pageSize={this.pageSize}
              country="us"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News setProgress={this.setProgress}
              key="business"
              pageSize={this.pageSize}
              country="us"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={this.setProgress}
              key="entertainment"
              pageSize={this.pageSize}
              country="us"
              category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News setProgress={this.setProgress}
              key="general"
              pageSize={this.pageSize}
              country="us"
              category="general"
            />
          </Route>
          <Route exact path="/health">
            <News setProgress={this.setProgress}
              key="health"
              pageSize={this.pageSize}
              country="us"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News setProgress={this.setProgress}
              key="science"
              pageSize={this.pageSize}
              country="us"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News setProgress={this.setProgress}
              key="sports"
              pageSize={this.pageSize}
              country="us"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News setProgress={this.setProgress}
              key="technology"
              pageSize={this.pageSize}
              country="us"
              category="technology"
            />
          </Route>
        </Router>
      </div>
    );
  }
}
