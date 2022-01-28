import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import MovieDetail from "../components/MovieDetail"
import styles from "./HomeDetail.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Detail(){

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const {id} = useParams();

    const getMovie = async() =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() =>{
       getMovie();
    }, []);


    return (

        <div className={styles.container}>
        {loading ?(
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
                <div>
                    <MovieDetail 
                        key={movie.id}
                        id={movie.id}
                        year = {movie.year}
                        coverImg = {movie.medium_cover_image}
                        title = {movie.title}
                        summary = {movie.description_full}
                        genres = {movie.genres}
                        backImg = {movie.background_image_original}
                    />
                </div>
            </div>
            )}
        </div>
    )

}
export default Detail;