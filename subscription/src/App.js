import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PricingPage from './pages/PricingPage'
import SubscriptionCard from './components/pricing/SubscriptionCard';

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/pricingpage" component={PricingPage}/>
        <Route exact path="/subscriptionplan" component={SubscriptionCard}/>
      </div>
    </Router>
    
  );
}

export default App;
