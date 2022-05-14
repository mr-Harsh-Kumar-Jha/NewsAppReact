import React ,{useState} from 'react'
// import NewsItem from './newsItem';

const Country = ({setCountry,country})=> {
   const [countries, setCountries] = useState('India');
   // const func = (cont)=> {
   //    setcountries(cont); ̑z
   //  }

      return (
         <>

            <div className="dropdown " style={{marginRight:'100px'}}>
               <button className="btn btn-secondary dropdown-toggle pointer"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {countries} </button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                  <li onClick={()=>{
                      setCountry('in')
                      setCountries('India');
                     //  <NewsItem country={'in'}/>
                  }}> <span className=" active dropdown-item"  value="/in">India</span></li>
                  <li onClick={()=>{
                      setCountry('ar');
                      setCountries('Argentina');
                  }}>  <span className="nav-link active dropdown-item"value="/ar">Argentina</span> </li>
                  <li onClick={()=>{
                      setCountry('ae');
                      setCountries('UAE');
                  }}> <span className="nav-link active dropdown-item"value="/ae">UAE</span></li>
                  <li  onClick={()=>{
                      setCountry('at');
                      setCountries('Austria');
                  }}> <span className="nav-link active dropdown-item"value="/at">Austria</span></li>
               </ul>
            </div>
         </>
      )
   }
export default Country;
