import React from 'react';
import classes from './search.module.css';
import { useState } from 'react';
import { useNavigate , useParams} from 'react-router-dom';

Search.defaultProps = {
  searchRoute: '/search',
  defaultRoute: '/',
  placeholder:'Craving for...' 
}
export default function Search({searchRoute, defaultRoute, margin, placeholder}) {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const { searchTerm } = useParams();

  const search = async () => {
    term ? navigate(searchRoute + term) : navigate(defaultRoute);
  }
  
  return (
    <div className={classes.container} style={{margin}}>
      <input type='text'
        placeholder={placeholder}
        onChange={e => setTerm(e.target.value)}
        onKeyUp={e => e.key === 'Enter' && search()}
        defaultValue={searchTerm}
      />
      <button onClick={search}>Search</button>
    </div>
  )
}
