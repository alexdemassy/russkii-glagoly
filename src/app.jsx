
// For Webpack to bundle stylesheets
require('../stylesheets/styles.scss');


// Import to level componenets
import SearchBox from './components/SearchBox.jsx';
import Results from './components/Results.jsx';

class App extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = { searchResults: [] };
        // Bind event handlers
        this.inputChange = this.inputChange.bind(this);
    }

    componentDidMount(){
        console.log("App chargee lancement de la requete JSON pour les donnees");
        this.verbs = this.fetchJSON("data/verbs.json");
    }
    
    fetchJSON (url) {
      fetch(url).then(function(response) {
          if(response.ok) {
              console.log('Got a fetch response');
              return reponse.json();
          } else {
              console.log('Network response was not ok. Status type:' + reponse.status);
          }
      })
      .catch(function(error) {
          console.log('There has been a problem with the fetch operation: ' + error.message);
      });
    }

    showResults (response) {
        this.setState({ searchResults: reponse.results });
    }

    inputChange () {

    }

    render () {
        return (
          <div>
            <h1 className="title">Русский Глаголы !</h1>
            <p>A russian verb reference.</p>
            <SearchBox />
            <Results />
          </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
);