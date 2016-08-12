import React from 'react';
import Suggestion from './Suggestion';

export default class Suggestions extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { searchResults: [] };
        // Bind event handlers
        //this.inputChange = this.inputChange.bind(this);
    }

    function X () {
        return this.props.list.map (() => {
        });
    }

    render () {
        return (
          <ul>{this.send()}</ul>
        );
    }
};