import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import NewsItem from './components/newsItem';
import {
   BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";


function App() {
   return (
      <>
         <Router>
            <Navbar />
            <div className='container'>
               <Switch>
                  <Route exact path="/"><NewsItem key={'general'} pageSize={9} category={'general'} /></Route>
                  <Route exact path="/business"><NewsItem key={'business'} pageSize={9} category={'business'} /></Route>
                  <Route exact path="/sports"><NewsItem key={'sports'} pageSize={9} category={'sports'} /></Route>
                  <Route exact path="/entertainment"><NewsItem key={'entertainment'} pageSize={9} category={'entertainment'} /></Route>
                  <Route exact path="/technology"><NewsItem key={'technology'} pageSize={9} category={'technology'} /></Route>
                  <Route exact path="/health"><NewsItem key={'health'} pageSize={9} category={'health'} /></Route>
                  <Route exact path="/science"><NewsItem key={'science'} pageSize={9} category={'science'} /></Route>
               </Switch>
            </div>
         </Router>
      </>
   );
}

export default App;
