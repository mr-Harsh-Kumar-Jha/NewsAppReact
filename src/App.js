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
            <div className='container ' style={{marginTop: '90px'}}>
               <Switch>
                  <Route exact path="/"><NewsItem key={'general'} pageSize={9} category={'general'} country={'in'} /></Route>
                  <Route exact path="/business"><NewsItem key={'business'} pageSize={9} category={'business'} country={'in'}/></Route>
                  <Route exact path="/sports"><NewsItem key={'sports'} pageSize={9} category={'sports'} country={'in'}/></Route>
                  <Route exact path="/entertainment"><NewsItem key={'entertainment'} pageSize={9} category={'entertainment'} country={'in'}/></Route>
                  <Route exact path="/technology"><NewsItem key={'technology'} pageSize={9} category={'technology'} country={'in'}/></Route>
                  <Route exact path="/health"><NewsItem key={'health'} pageSize={9} category={'health'} country={'in'}/></Route>
                  <Route exact path="/science"><NewsItem key={'science'} pageSize={9} category={'science'} country={'in'}/></Route>
               </Switch>
            </div>
         </Router>

      </>
   );
}

export default App;
