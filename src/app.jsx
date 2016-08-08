
require('../stylesheets/styles.scss');


var CommentBox = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Comments</h1>
        <p>Hello world!!!</p>
      </div>
    );
  }
});



ReactDOM.render(
    <CommentBox />,
    document.getElementById('app')
);