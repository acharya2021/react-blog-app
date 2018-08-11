import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions";

class PostsIndex extends Component {
    // a react life cycle method
    // automatically called by react immediately after this component
    // has shown up inside the dom
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        // use a lodash function to map an object
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            )
        });
    }


    render() {
        // console.log(this.props.posts);
        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts};
}

// wire up the action creator fetchPosts
// this syntax is identical to using mapDispatchToProps
// so we still have access to this.props.fetchPosts
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);