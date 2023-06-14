import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Inventory from './components/Inventory';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
      <Navbar />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Inventory />} />
        </Routes>
      </Router>
      </>
    </ApolloProvider>
  );
}

export default App;
