import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import NewsItem from './components/newsItem';
import {
   BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";


function App() {
   const [country , setCountry] = useState("in"); // this is created inorder to set country selected by user..

   console.log("country ", country);
   return (
      <>
         <Router>
            <Navbar setCountry={setCountry} />    { /*here call back function is used    */}
            <div className='container ' style={{marginTop: '90px'}}>
               <Switch>
                  <Route exact path="/"><NewsItem  key={'general'}   pageSize={9} category={'general'} country={country} /></Route>    {/*here newsitem is called and it is receiving some output from newsitem this is same as function call with argument and return value... */}
                  <Route exact path="/business"><NewsItem key={'business'} pageSize={9} category={'business'} country={country}/></Route>

                  <Route exact path="/sports"><NewsItem key={'sports'} pageSize={9} category={'sports'} country={country}/></Route>

                  <Route exact path="/entertainment"><NewsItem key={'entertainment'} pageSize={9} category={'entertainment'} country={country}/></Route>

                  <Route exact path="/technology"><NewsItem key={'technology'} pageSize={9} category={'technology'} country={country}/></Route>

                  <Route exact path="/health"><NewsItem key={'health'} pageSize={9} category={'health'} country={country}/></Route>

                  <Route exact path="/science"><NewsItem key={'science'} pageSize={9} category={'science'} country={country}/></Route>
               </Switch>
            </div>
         </Router>

      </>
   );
}

export default App;
