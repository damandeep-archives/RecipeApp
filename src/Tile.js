import React, { useEffect, useState } from 'react'
import './Tile.css';

import { useHistory } from 'react-router';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import back from './img/image-not-found.png';


const Tile = ({recipe}) => {
    

const history=useHistory();
 
    return (
        <div className='tile'>

           {!recipe.recipe.image && <p>'not avaialble</p>} 
           {recipe.recipe.image &&
           <img className='tile__img' src={recipe.recipe.image} onError={(e)=>{e.target.onerror = null; e.target.src=`${back}`}}></img>}
          
            
            <p className='tile__title'>{recipe.recipe.label}</p>
            

            

            <div className='tile__bottom' onClick={()=>window.open(`${recipe.recipe.url}`)} >
                Recipe  
            </div>
            
                
            
            
        </div>
    )
}

export default Tile
