
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
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCmjTFE9q10WacGV1xSMQMB8K8V9sscwTM",
  authDomain: "mars-talk-387e0.firebaseapp.com",
  projectId: "mars-talk-387e0",
  storageBucket: "mars-talk-387e0.appspot.com",
  messagingSenderId: "452863505404",
  appId: "1:452863505404:web:30f287c29a709867dbb879",
  measurementId: "G-5FB3FJTYN1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


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
            <ContactPage db={db} />
          </Route>
          <Route exact path="/messages">
            <MessagesPage data={db} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
