import React from 'react';

export default class Suggestion extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
          <li>{this.props.name}</li>
        );
    }
};