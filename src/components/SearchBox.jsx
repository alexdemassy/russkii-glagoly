import React from 'react';

export default class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { empty: true };
        // Bind event handlers
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange () {
        // Search in the JSON file
        if(this.ref.query) {}
    }

    render () {
        if (this.state.empty) {
            return (
            <div className="search-box">
                <input type="text" ref="query" onKeyPress={this.handleInputChange} />
                <input type="submit" />
            </div>
            );
        }
        return (
            <div className="search-box">
                <input type="text" ref="query" onKeyPress={this.handleInputChange} />
                <input type="submit" />
                <SuggestionBox suggestions={this.suggestions} />
            </div>
        )
    }
};