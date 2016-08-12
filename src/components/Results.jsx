import React from 'react';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { searchResults: [] };
        // Bind event handlers
        //this.inputChange = this.inputChange.bind(this);
    }

    render () {
        return (
          <div>
            <p>No results to display yet....</p>
          </div>
        );
    }
};