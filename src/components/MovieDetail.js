import propTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Detail.module.css";

function MovieDetail({ id, coverImg, title, year, summary, genres, backImg}) {
    return(
    <div className={styles.all}>
        <img src={backImg} className={styles.movie__back}></img>
        <div className ={styles.movie}>
            <img src = {coverImg} alt = {title} className= {styles.movie__img} />
            <div>
                <div className={styles.movie_tAndY}>
                    <h2 className = {styles.movie__title}>
                        <Link to ={`/movie/${id}`}>{title}</Link>
                    </h2>
                    <h3 className= {styles.movie__year}>({year})</h3>
                </div>
                <p className ={styles.movie__summary}>{summary}</p>
                <ul className = {styles.movie__genres}>
                    {genres.map((g)=>(
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>   
    );
}
MovieDetail.propTypes = {
    id: propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title:propTypes.string.isRequired,
    summary:propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
    backImg: propTypes.string.isRequired
}
export default MovieDetail;