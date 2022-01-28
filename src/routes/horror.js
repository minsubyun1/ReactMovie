import {useState} from "react";
import { useEffect } from "react";
import styles from "./Home.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Thriller from "../components/Thriller";
function Horror(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
    const getMovies = async() => {
     const json = await (await fetch(
       `https://yts.mx/api/v2/list_movies.json?genre=thriller`
       )).json();
       setMovies(json.data.movies);
       setLoading(false);
      };
      useEffect(() =>{
        getMovies();
      },[]);
    console.log(movies);
    return(
      
      <div className={styles.container}>
      {loading ? (
        <div>
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
        </div>
      ) : (
      <div>
        <div className={styles.nav}>
          <div className={styles.nav_title}>SUBFLIX </div>
          <div className={styles.nav_menu}>
            <div className={styles.nav_homme}><Link to={`/`}> HOME </Link></div>
            <div className={styles.nav_action}><Link to={`/romance`}>ROMANCE</Link> </div>
            <div className={styles.nav_romance}><Link to={`/thriller`}> THRILLER</Link> </div>
            <div className={styles.nav_animation}><Link to ={`/Animation`}>ANIMATION</Link></div>
            <div className = {styles.nav_icon}><FontAwesomeIcon icon={faSearch} /></div>
            <div className = {styles.nav_bell}><FontAwesomeIcon  icon={faBell}/></div>
            <div className = {styles.nav_insta}><FontAwesomeIcon  icon={faInstagram}/></div>
          </div>       
        </div>
        <div className={styles.movies}>
          {movies.map((movie) => 
              <Thriller 
              key = {movie.id}
              id={movie.id}
              year = {movie.year}
              coverImg={movie.medium_cover_image} 
              title={movie.title} 
              summary={movie.summary} 
              genres={movie.genres}
            
              />
            )}
            </div>
      </div>
      )}
    </div>
    ); 
}
export default Horror;