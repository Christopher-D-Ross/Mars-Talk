
import './App.css';
import './dashblock.css';
import './Title-Menu.css';
import './Contact.css';
import './Messages.css';
import { LandingPage } from './Components/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from "./Components/Dashboard";
import { ContactPage } from "./Components/Contacts-page";
import { MessagesPage } from "./Components/Messages";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/contacts">
            <ContactPage />
          </Route>
          <Route exact path="/messages">
            <MessagesPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
