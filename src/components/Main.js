import React from 'react';
import {
    BrowserRouter as Router,
     Route,
    Switch,
    Link
} from 'react-router-dom'
import SinglePost from './SinglePost.js';
import About from './About.js';
import Home from './Home.js';
import PostArchive from './PostArchive.js';

class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route strict path='/posts/:pageNumber' component={PostArchive}/>
                    <Route strict path='/post/:id' component={SinglePost}/>
                    <Route exact path='/about' component={About}/>
                </Switch>
            </main>
        )
    }
}

export default Main;

