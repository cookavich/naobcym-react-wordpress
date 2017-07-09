import React from 'react';
import PostsList from './PostsList.js';

class PostArchive extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props && <PostsList page={Number(this.props.match.params.pageNumber)} />}
            </div>
        )
    }
}

export default PostArchive;