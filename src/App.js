
import './App.css';
import './dashblock.css';
import './Title-Menu.css';
import './Contact.css';
import './Messages.css';
import { LandingPage } from './Components/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard } from "./Components/Dashboard";
import { ContactPage } from "./Components/Contacts-page";
import { MessagesPage } from "./Components/Messages";
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// const client = require('twilio');


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
const auth = getAuth();

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

// const accountSid = 'AC86fab9cd438753065cf5134c821d9e09'; 
// const authToken = '1f70886a9a36fbe945f76a45f4d2b0e7'; 

// client.messages 
//       .create({ 
//          body: 'This is Mars Talk',  
//          messagingServiceSid: 'MG151d4f5417cf20f600e0e17ff2d67944',      
//          to: '+14049379860' 
//        }) 
//       .then(message => console.log(message.sid)) 
//       .done();


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard db={db}/>
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
