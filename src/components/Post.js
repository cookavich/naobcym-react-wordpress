import React from 'react';

class Post extends React.Component {
    render() {
        const post = this.props.location.state.post;
        console.log(post);
        return (
            <div>
                <h1>{post.title.rendered}</h1>
                {post.featured_media ?
                    <a href={post.link}><img
                        src={post._embedded['wp:featuredmedia'][0].media_details.sizes["full"].source_url}/></a>
                    : null}
                <div>
                    {post.content.rendered.toString()}
                </div>
            </div>
        )
    }
}

export default Post;