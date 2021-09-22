import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Contact from './Contact';
import Home from './Home';
import Posts from './Posts';
import FullPost from './FullPost';
import SignupBtn from './SignupBtn';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './Profile';
import SearchResult from './SearchResult';
import Error404 from './Error404';



export default function NavBar(props) {
    //alert(props.theme.themeName)
    const { isAuthenticated } = useAuth0();
    return (
    <Router>    
        <nav className={`navbar navbar-expand-lg navbar-${props.theme.themeName} ${props.theme.navColor}-color`}>


        <Link className="navbar-brand" to="/">DjmBlogs</Link>


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="basicExampleNav">

            
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/posts">Blog posts</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact me</Link>
                </li>
                {isAuthenticated? 
                  <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
                  </li>
                :''}

                </ul>
            

            

            <div className="ml-auto">
                {/* Theme switch */}
            
                
                <span className="switch">
                        <label>
                            <input type="checkbox" onClick={props.toggleMode}/>
                            <span className="lever"></span>
                        </label>
                </span>
                
                <SignupBtn theme={props.theme}/>
                
            
            </div>
        </div>


        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/profile">
            <Profile theme={props.theme}/>
          </Route>
          <Route exact path="/post/:id">
            <FullPost theme={props.theme}/>
          </Route>
          <Route exact path="/search/:slug">
            <SearchResult theme={props.theme}/>
          </Route>
          <Route exact path="/posts">
            <Posts theme={props.theme}/>
          </Route>
          <Route exact path="/contact">
            <Contact theme={props.theme} />
          </Route>
          <Route exact path="/">
            <Home theme={props.theme}/>
          </Route>
          <Route path="*">
            <Error404 theme={props.theme}/>
          </Route>
        </Switch>
    </Router>    
    )
}
