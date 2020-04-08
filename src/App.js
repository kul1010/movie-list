import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './components/Header';
import About from './components/About';
import Movie from './containers/Movie';



function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      
          <Route exact path="/" component={Movie} />
          <Route path="/about" component={About} />
          
        
      </div>
    </Router>
  );
}

export default App;
