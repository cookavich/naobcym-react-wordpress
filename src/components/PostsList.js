import React from 'react';
import Axios from 'axios';
import PostExcerpt from './PostExcerpt.js'

class PostsList extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            headers: {}
        }
    }

    componentDidMount() {
        let dataURL = 'https://naobcyouth.org/wp-json/wp/v2/posts/?_embed';

        Axios.get(dataURL)
            .then(res => {
                this.setState({
                    posts: res.data,
                    headers: res.headers
                })
            })
    }

    render() {
        return (
            <div className="posts">
                {this.state.posts.map((post) => <PostExcerpt key={post.id} post={post}/>)}
            </div>
        )
    }
}

export default PostsList;