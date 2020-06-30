import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Charts from './components/Charts'
import './App.css';

const client =  new ApolloClient({
  uri: 'https://hw-fe-challenge-api.herokuapp.com/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Charts/>
      </div>
    </ApolloProvider>
  );
}

export default App;
