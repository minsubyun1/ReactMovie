import propTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";
function Animation({id, coverImg, title, summary, year, genres}){

    return (
    <div>
      <div className={styles.movie}>
        <div>
          <img src={coverImg} alt={title} className={styles.movie__img}/>
        </div>
        <div>
          <h2 className={styles.movie__title}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <h3 className={styles.movie__year}>{year}</h3>
          <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
          <ul className={styles.movie__genres}>
          {genres&&genres.map((g)=>(
                        <li key={g}>{g}</li>
                    ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

Animation.propTypes ={
    id:propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title:propTypes.string.isRequired,
    summary:propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}
export default Animation;