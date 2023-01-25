import './Movie.scss'
import { Movies } from '../../Assets'

interface MovieCardInterface {
  movie: { title: string; episodeID: number }
}
const MovieCard = ({ movie }: MovieCardInterface) => {
  const { title, episodeID } = movie
  const episodeNumbers = ['i', 'ii', 'iii', 'iv', 'v', 'vi']
  return (
    <div
      className="movie"
      style={{
        background: `url('${
          Movies[title.replace(/\s/g, '')]
        }') no-repeat center`,
        backgroundSize: '300px 500px',
      }}
    >
      {title}
      <br />
      <span> Episode {episodeNumbers[episodeID - 1]}</span>
    </div>
  )
}

export default MovieCard
