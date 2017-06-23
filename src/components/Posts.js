import React from 'react';

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
        return <p>Hey</p>
    }

}

export default Posts;