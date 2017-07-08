import React from 'react';

class Post extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    componentWillMount() {
        let postURL = `https://naobcyouth.org/wp-json/wp/v2/posts/${this.props.match.params.id}/?_embed`;
        fetch(postURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    post: res
                })
            })
    }

    render() {
        return (
            this.state.post ?
            <div className="single-post">
                <h1>{this.state.post.title.rendered}</h1>
                {this.state.post.featured_media
                    ? <img src={this.state.post._embedded['wp:featuredmedia'][0].media_details.sizes["full"].source_url}/>
                    : null}
                <div>
                    <div dangerouslySetInnerHTML={{__html: this.state.post.content.rendered}} />
                </div>
            </div>
            : <div> Loading ... </div>
        )
    }
}

export default Post;