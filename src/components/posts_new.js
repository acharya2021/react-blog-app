import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        // field.input is an object containing event handlers and props
        // ... communicates properties inside the field.input object
        // as props to the input tag
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        )
    }

    render() {
        return (
            <form>
                {/*used to represent a distinct input on the screen*/}
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        )
    }
}

// reduxForm is very similar to the connect helper
// we use it to wrap the PostsNew component
// thereby giving reduxForm to communicate directly from this component to the form reducer
export default reduxForm({
    form: "PostsNewForm"
})(PostsNew);