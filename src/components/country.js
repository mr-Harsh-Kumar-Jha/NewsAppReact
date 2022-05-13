import React , {useState}  from 'react'
// import NewsItem from './newsItem';

const Country = ()=> {
   const [countries, setcountries] = useState('India');
   // const func = (cont)=> {
   //    setcountries(cont);
   //  }
      return (
         <>

            <div className="dropdown " style={{marginRight:'100px'}}>
               <button className="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {countries} </button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                  <li onClick={()=>{
                      setcountries('in')
                     //  <NewsItem country={'in'}/>
                  }}> <span className=" active dropdown-item"  value="/in">India</span></li>
                  <li onClick={()=>{
                      setcountries('ar');
                  }}>  <span className="nav-link active dropdown-item"value="/ar">Argentina</span> </li>
                  <li onClick={()=>{
                      setcountries('ae');
                  }}> <span className="nav-link active dropdown-item"value="/ae">UAE</span></li>
                  <li  onClick={()=>{
                      setcountries('at');
                  }}> <span className="nav-link active dropdown-item"value="/at">Austria</span></li>
               </ul>
            </div>
         </>
      )
   }
export default Country;
