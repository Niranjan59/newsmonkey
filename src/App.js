import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

 const App=()=> {

  const [progress, setProgress] = useState(0)
  const [pageSize, setPageSize] = useState(0)
  const [apiKey] = useState(process.env.REACT_APP_NEWS_API)

  setProgress(progress)
  setPageSize(5)


    return (

      <div>
        <Router>
          <Navbar />
          <LoadingBar height={3} color="#ff0000" progress={progress} />
          <Route exact path="/">
            <News setProgress={setProgress} apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="us"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News setProgress={setProgress} apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="us"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setProgress} apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="us"
              category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News setProgress={setProgress} apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="us"
              category="general"
            />
          </Route>
          <Route exact path="/health">
            <News setProgress={setProgress} apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="us"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News setProgress={setProgress} apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="us"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News setProgress={setProgress} apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="us"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News setProgress={setProgress} apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="us"
              category="technology"
            />
          </Route>
        </Router>
      </div>
    );
}

export default App;