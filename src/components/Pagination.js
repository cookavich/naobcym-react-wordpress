import React from 'react';

export const Pagination = (props) => {
    return (
        <div className="post">
            <h2><Link to={{pathname: `/post/${props.id}`}}>{props.title.rendered}</Link></h2>
            {props.featured_media ?
                <img src={props._embedded['wp:featuredmedia'][0].media_details.sizes["full"].source_url}/>
                : null}
            <p dangerouslySetInnerHTML={{__html: props.excerpt.rendered}}/>
        </div>
    )
};