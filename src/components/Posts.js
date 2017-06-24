import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'


class Posts extends React.Component {
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
        let posts = this.state.posts.map((post) => {
            return (
                <div class="post">
                    <h2><Link to={`/post/${post.id}`}>{post.title.rendered}</Link></h2>
                    <div>{post.excerpt.rendered}</div>
                </div>
            )
        });
        return (
            <div>
                {posts}
            </div>
        )
    }
}

export default Posts;