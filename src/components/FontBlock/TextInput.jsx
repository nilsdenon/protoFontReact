import React, { Component } from 'react';

export default class TextInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 'Hello, my name is' };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    createMarkup() {
        return { __html: this.state.value };
    }

    render() {
        return (
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <label htmlFor="markdown-content">Enter some markdown</label>
                <textarea
                    id="markdown-content"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                />
                <h3>Output</h3>
                <div
                    className="content"
                    dangerouslySetInnerHTML={this.createMarkup()}
                />
            </div>
        );
    }
}
