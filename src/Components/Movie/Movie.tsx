import './Movie.scss'
// import { Movies } from '../../Assets'

interface MovieCardInterface {
  movie: { title: string; episodeID: number }
}
const MovieCard = ({ movie }: MovieCardInterface) => {
  const { title, episodeID } = movie
  const episodeNumbers = ['i', 'ii', 'iii', 'iv', 'v', 'vi']
  return (
    <div
      // style={{
      //   background: `url('${
      //     Movies[title.replace(/\s/g, '')]
      //   }') no-repeat center`,
      //   backgroundSize: '300px 500px',
      //   backgroundPosition: '0px 0px ',
      // }}
      className={`movie movie-${episodeID}`}
    >
      {title}
      <br />
      <span> Episode {episodeNumbers[episodeID - 1]}</span>
    </div>
  )
}

export default MovieCard
