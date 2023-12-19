import { Link, useParams } from 'react-router-dom'
import Planet from '../../Components/Planet/Planet'
import { Starships } from '../../Assets'
import './MoviePage.scss'
import { useGetFilmPlanets } from '../../CustomHooks/CustomHooks'

const MoviePage = () => {
  const urlId = useParams()
  const { loading, error, data } = useGetFilmPlanets({
    variables: { filmId: urlId.ID },
  })

  if (loading) return <h1>Loading...</h1>

  if (error) return <>Error! ${error.message}</>

  const episodeNumbers = ['i', 'ii', 'iii', 'iv', 'v', 'vi']
  return (
    <div className="movie-page">
      <Link to="/">
        <div className="back">Go back</div>
      </Link>
      <h1>
        {data?.film?.title}
        <br />
        <span>Episode {episodeNumbers[data?.film?.episodeID - 1]}</span>
      </h1>
      <h2>Planets:</h2>
      {data?.film?.planetConnection?.planets?.map(
        (planet: { name: string; id: string }) => (
          <>
            <Planet planet={planet} key={planet.id} />
          </>
        )
      )}
      <h2>Starships:</h2>
      {data?.film?.starshipConnection?.starships?.map(
        (starship: { name: string }, index: number) => (
          <>
            <p key={index}>{starship.name}</p>
            <img
              src={Starships[starship.name.replace(/\s/g, '').replace('-', '')]}
              alt={starship.name}
              draggable={false}
            />
          </>
        )
      )}
    </div>
  )
}

export default MoviePage
