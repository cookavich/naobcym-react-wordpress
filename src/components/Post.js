import React from 'react';

class Post extends React.Component {

    constructor() {
        super();
        this.state = {
            isReady: false
        }
    }

    componentWillMount() {
        let postURL = `http://naobcyouth.org/wp-json/wp/v2/posts/${this.props.match.params.id}/?_embed`;
        fetch(postURL)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    post: res
                })
            })


    }

    render() {
        return (
            this.state.post ?
            <div>
                <h1>{this.state.post.title.rendered}</h1>
                {this.state.post.featured_media ?
                    <a href={this.state.post.link}><img
                        src={this.state.post._embedded['wp:featuredmedia'][0].media_details.sizes["full"].source_url}/></a>
                    : null}
                <div>
                    {this.state.post.plaintext}
                </div>
            </div>
            : <div> Loading ... </div>
        )
    }
}

export default Post;