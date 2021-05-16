import React, { useEffect, useState } from 'react'
import './Header.css';
import SearchIcon from '@heroicons/react/outline/SearchIcon';
import axios from 'axios';
import Tile from './Tile';
import ShoppingIcon from '@heroicons/react/outline/ShoppingBagIcon';


import Loading from './Loading';

const Header = () => {
   
    const [search,setSearch]=useState('');
    const [recipe,setRecipe]=useState([]);

    const[loading,setLoding]=useState(false);

    useEffect(() => {
        getRecipes();
    }, [])

  

    const url=`https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_YOUR_APP_ID}&app_key=${process.env.REACT_APP_YOUR_APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`;

    const [error,setError]=useState(false);

   async function getRecipes(){
    
       setLoding(true);
       setError(false);
 
        var result = await axios.get(url);
        if(result.data.count===0)
        setError(true);
        
    
        
        setRecipe(result.data.hits);
        setLoding(false);
        console.log(result);
    }

    
    return <> 
    
        <div className='header'>
            <h1 className='header__head'>Search your Recipe</h1>

            
            
            <div
             className='header__items'>               <input className='header__search' type='text' placeholder='Enter Dish Name' value={search} 
             onKeyPress={(e)=>{
                if(e.key==='Enter'){
                    getRecipes();
                }
             }}
             onChange={(e)=>setSearch(e.target.value) }></input>
           
           
            <SearchIcon className='header__icon'
            onClick={()=>getRecipes()}/>
            </div>
         
             
          


            {loading && <Loading/>}

            {error==true && <h1> No Results</h1>}

            {!loading && <div className='header__results'>
            {recipe.map(recipe=>{
            return <Tile recipe={recipe} />
            })}
         </div>}
            

           
        </div>
        
    
    </>
}


export default Header
