import { API_URL } from '../constants';
import Movie from '../../components/movie';
import styles from '../../styles/Home.module.css';

export const metadata = {
  title: 'Home',
};

const getMovies = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
};

export default async function home() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export const runtime = 'edge';
