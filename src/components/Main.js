import React from 'react';
import {
    BrowserRouter as Router,
     Route,
    Switch,
    Link
} from 'react-router-dom'
import Posts from './Posts.js';
import Post from './Post.js';
import SubPage from "./SubPage";

class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Posts}/>
                    <Route path='/:slug' component={SubPage}/>
                    <Route path='/post/:id' component={Post}/>
                </Switch>
            </main>
        )
    }
}

export default Main;

