import fetch from 'isomorphic-fetch';

const postsUrl = 'http://naobcyouth.org/wp-json/wp/v2/posts'; // Wordpress installation url
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';


function requestPosts() {
    return {
        type: REQUEST_POSTS
    }
}

function receivePosts(json) {
    return {
        type: RECEIVE_POSTS,
        posts: json.data.map(child => child.data),
        receivedAt: Date.now()
    }
}

function fetchPosts() {
    return dispatch => {
        dispatch(requestPosts());
        return fetch(postsUrl)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}

function shouldFetchPosts() {
    const posts = state.posts;
    if (!posts)
       return true;
    else if (posts.isFetching)
        return false;
    else
        return posts.didInvalidate;
}
