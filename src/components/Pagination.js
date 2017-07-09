import React from 'react';
import {NavLink} from 'react-router-dom'

class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let link = this.props.link === 1 ? '/' : `/posts/${this.props.link}`;
        return <NavLink exact to={{pathname: `${link}`}} activeClassName="activeLink">{this.props.link}</NavLink>
    }
}

export default Pagination;