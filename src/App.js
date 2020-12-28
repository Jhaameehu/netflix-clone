import React from 'react';
import Row from './Row';
import './App.css';
import requests from './request';
import Banner from './Banner';

function App() {
  return ( 
    <div className='app'>
      <Banner />
    <Row title = 'NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow / >
    <Row title = 'Trending Now' fetchUrl={requests.fetchTrending}/ >
    <Row title = 'Action Movies' fetchUrl={requests.fetchActionMovies}/ >
    <Row title = 'Comedy Movies' fetchUrl={requests.fetchComedyMovies}/ >
    <Row title = 'Horror Movies' fetchUrl={requests.fetchHorrorMovies}/ >
    <Row title = 'Romance Movies' fetchUrl={requests.fetchRomanceMovies}/ >
    <Row title = 'Documentries Movies' fetchUrl={requests.fetchDocumentries}/ >
    </div>
  );
}

export default App;