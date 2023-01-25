import './App.scss'
import { useQuery, gql } from '@apollo/client'
import Planet from './Components/Planet/Planet'
import Movie from './Components/Movie/Movie'
import MoviesWrapper from './Components/Movie/MoviesWrapper'

const DATA = gql`
  query GetPlanets {
    allPlanets {
      planets {
        name
        id
      }
    }
    allFilms {
      films {
        title
        episodeID
      }
    }
  }
`

export const App = () => {
  const { loading, error, data } = useQuery(DATA)

  if (loading) return <>Loading....</>

  if (error) return <>Error! ${error.message}</>
  return (
    <>
      <div>
        <h1>Hello Teo!</h1>
      </div>
      <MoviesWrapper>
        {data?.allFilms.films.map(
          (film: { title: string; episodeID: number }) => (
            <Movie movie={film} key={film.episodeID} />
          )
        )}
      </MoviesWrapper>
      <hr />
      {data?.allPlanets.planets.map((planet: { name: string; id: string }) => (
        <Planet planet={planet} key={planet.id} />
      ))}
    </>
  )
}
