import {Link} from 'react-router-dom';
import React from 'react';

const PostExcerpt = (props) => {
    return (
        <div className="post">
            <h2><Link to={{pathname: `/post/${props.post.id}`}}>{props.post.title.rendered}</Link></h2>
            {props.featured_media ?
                <img src={props.post._embedded['wp:featuredmedia'][0].media_details.sizes["full"].source_url}/>
                : null}
            <p dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}}/>
        </div>
    )
};

export default PostExcerpt;