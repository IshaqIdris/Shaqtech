import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import NewsPage from './components/newsComp/newsPage';
import SignIn from './components/CMS/SignIn';
import NewNews from './components/CMS/newNews';

class App extends Component {
  render() {
    return (
      <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route path="/newsPage/:id" component={NewsPage}/>
            <Route path='/signin' component={SignIn} />
            <Route path='/create' component={NewNews} />
          </Switch>
      </Router>
    );
  }
}

export default App;
