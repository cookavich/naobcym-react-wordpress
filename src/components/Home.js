import React from 'react';
import PostsList from './PostsList.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3 className="greeting">Welcome to the blog of the Ninth and O Baptist Church Youth Ministry!</h3>
                <PostsList page={1} />
            </div>
        )
    }
}

export default Home;