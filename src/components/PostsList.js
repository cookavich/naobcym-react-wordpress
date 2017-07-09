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
            currentPage: 1
        };

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNum) {
        this.setState(prevState => ({
            currentPage: pageNum
        }));
    }

    componentDidMount() {
        let dataURL = `https://naobcyouth.org/wp-json/wp/v2/posts?page=${this.state.currentPage}&_embed`;
        Axios.get(dataURL)
            .then(res => {
                this.setState({
                    posts: res.data,
                    totalPages: res.headers['x-wp-totalpages'],
                })
            })
    }

    getPosts() {
        let dataURL = `https://naobcyouth.org/wp-json/wp/v2/posts?page=${this.state.currentPage}&_embed`;
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
            <div className="posts">
                {this.state.posts.map((post) => <PostExcerpt key={post.id} post={post}/>)}
                {this.state.totalPages && [...new Array(Number(this.state.totalPages))].map((_, index) => {
                    return <Pagination
                        key={index}
                        link={index+1}
                    />
                })}
            </div>
        )
    }
}

export default PostsList;