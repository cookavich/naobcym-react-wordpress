import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import Header from './components/Header.js';
import Posts from './components/Posts.js';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let dataURL = 'http://naobcyouth.org/wp-json/wp/v2/posts';

        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    posts: res
                })
            })
    }

    render() {
        return (
            <div>
                <Header />
                <Posts />
            </div>
        )
    }

    // render() {
    //     let posts = this.state.posts.map((post, index) => {
    //         return (
    //             <Post post={post} key={index} />
    //         )
    //     });
    //
    //     return (
    //         <div>
    //             <h1>NAOBC Youth</h1>
    //             {posts}
    //         </div>
    //     )
    // }


}

export default App;

class Post extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.post.title.rendered}</h2>
                <div>{this.props.post.excerpt.rendered}</div>
            </div>
        )
    }
}