import React from 'react';
import {
    BrowserRouter as Router,
     Route,
    Switch,
    Link
} from 'react-router-dom'
import PostsList from './PostsList.js';
import SinglePost from './SinglePost.js';
import About from './About.js';

class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={PostsList}/>
                    <Route path='/post/:id' component={SinglePost}/>
                    <Route exact path='/about' component={About}/>
                </Switch>
            </main>
        )
    }
}

export default Main;

