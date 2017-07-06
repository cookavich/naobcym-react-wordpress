import React from 'react';
import {
    BrowserRouter as Router,
     Route,
    Switch,
    Link
} from 'react-router-dom'
import Posts from './Posts.js';
import Post from './Post.js';
import About from './About.js';

class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Posts}/>
                    <Route path='/post/:id' component={Post}/>
                    <Route exact path='/about' component={About}/>
                </Switch>
            </main>
        )
    }
}

export default Main;

