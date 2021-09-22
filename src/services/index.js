import axios from 'axios';


const baseURL = "https://pokeapi.co/api/v2/";


export function getListPokemon(offset, limit){

    return axios.get(baseURL + "pokemon?offset=" + offset + '&limit=' + limit);

}

export function getDataPokemon(url){
    return axios.get(url);
}