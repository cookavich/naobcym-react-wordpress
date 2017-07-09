import React from 'react';
import Axios from 'axios';
import PostExcerpt from './PostExcerpt.js'
import Pagination from './Pagination.js';

class PostsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            headers: {},
        };
    }

    componentDidMount() {
        this.getPosts(this.props.page);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.page !== this.props.page) {
            this.getPosts(nextProps.page);
            return true;
        }
    }

    getPosts(page) {
        let dataURL = `https://naobcyouth.org/wp-json/wp/v2/posts?page=${page}&_embed`;
        Axios.get(dataURL)
            .then(res => {
                this.setState({
                    posts: res.data,
                    totalPages: res.headers['x-wp-totalpages'],
                })
            })
    }


    render() {
        return (
            <div>
                <div className="posts">
                    {this.state.posts.map((post) => <PostExcerpt key={post.id} post={post}/>)}
                </div>
                <div className="pagination">
                    {this.state.totalPages && [...new Array(Number(this.state.totalPages))]
                        .map((_, index) => {
                            return <Pagination key={index} link={index + 1}/>
                        })}
                </div>
            </div>
        )
    }
}

export default PostsList;