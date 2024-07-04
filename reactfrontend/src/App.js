import './App.css';
import { useEffect, useState, } from 'react';
import axios from "axios";

function App() {
  const [anime, setAnime] = useState([])

  useEffect(()=>{
    async function getAllAnime(){
      try {
        const anime = await axios.get("http://127.0.0.1:8000/api/anime/") 
        console.log(anime.data)
        setAnime(anime.data)

      } catch (error) {
        console.log(error)
      }
    }
    getAllAnime()
  }, [])
  
  
  return (
    <div className="App">
     <h1>List of Anime (Fetched using API)</h1>
     <hr/>
     {
       anime.map((anime, i)=>{
         return (
           <h2 key={i}>  Anime Name :- {anime.anime_name} <br/> Anime Year :- {anime.anime_year} <hr/></h2>
           
         )
       })
     }
    </div>
  );
}

export default App;
