import axios from 'axios';

const baseURL = "https://pokeapi.co/api/v2/";

/**
 * Fetch pokemon list
 * 
 * @param {number} offset 
 * @param {number} limit 
 * @returns 
 */
export function getListPokemon(offset, limit){
    return axios.get(baseURL + "pokemon?offset=" + offset + '&limit=' + limit);
}

/**
 * Fetch pokemon details
 * 
 * @param {string} url 
 * @returns 
 */
export function getDataPokemon(url){
    return axios.get(url);
}