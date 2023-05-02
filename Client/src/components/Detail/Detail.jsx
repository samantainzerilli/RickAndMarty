import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'

//const URL_BASE= 'https://be-a-rym.up.railway.app/api/character';
//const APY_KEY='f90eaa3b8a95.5106888823f5980622af';

const Detail= ()=>{
    const { id }= useParams();
    const [character,setCharacter]= useState({});
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch(error => console.log(error));
  }, [id]);



    return(
      <div className={style.cardD}>
      <img className={style.image} src={character?.image} alt={character?.name} />
      <div className={style.text}>
        <h2> {character?.name}</h2>
        <h2> Status:{character?.status}</h2>
        <h2> Species: {character?.species}</h2>
        <h2> Gender: {character?.gender}</h2>
        <h2> Origin:{character?.origin?.name}</h2>
      </div>
      </div>
  
    )
}
export default Detail;