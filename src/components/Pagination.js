import React from 'react';
import {NavLink} from 'react-router-dom'

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // this.props.onPageChange(this.props.link);
    }

    render() {
        let link = this.props.link === 1
            ? '/'
            : `/posts/${this.props.link}`;
        return (
            <NavLink
                to={{pathname: `${link}`}}
                activeStyle={{fontWeight: 'bold'}}
                onClick={this.handleClick}>{this.props.link}</NavLink>
        )
    }
}

export default Pagination;