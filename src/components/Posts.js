import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import Post from './Post';


class Posts extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let dataURL = 'http://naobcyouth.org/wp-json/wp/v2/posts/?_embed&per_page=5';

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
                <div className="post" key={post.id}>
                    <h2><Link to={{
                        pathname: `/post/${post.id}`,
                        state: {post}
                    }}>{post.title.rendered}</Link></h2>
                    {post.featured_media ?
                    <a href={post.link}><img src={post._embedded['wp:featuredmedia'][0].media_details.sizes["full"].source_url} /></a>
                    : null}
                    <div>{post.plaintext_excerpt}</div>
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