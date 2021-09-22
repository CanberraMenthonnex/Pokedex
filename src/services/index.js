import {useState, useEffect} from 'react';
import axios from 'axios';


const baseURL = "https://pokeapi.co/api/v2/";


export function getListPokemon(offset, limit){
    const [post, setPost] = useState(null);
    
    useEffect(() => {
        axios.get(baseURL + "/pokemon?offset=" + offset + '&limit=' + limit).then((response) => {
            setPost(response.data);
        });
}, []);

return(post);

}

