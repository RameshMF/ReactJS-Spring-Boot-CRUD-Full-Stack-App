import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import routes from './routes/router';


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          {/* Map over the routes array and render Route components */}
                          {routes.map((route, index) => (
                            <Route
                              key={index}
                              path={route.path}
                              exact={route.exact || false}
                              render={(props) => (
                                <route.component {...props} />
                              )}
                            />
                          ))}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
