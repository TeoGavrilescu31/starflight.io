import { useQuery, gql, QueryHookOptions } from '@apollo/client'

const FILMS = gql`
  query GetFilms {
    allFilms {
      films {
        title
        episodeID
      }
    }
  }
`

export const useGetFilms = () => {
  return useQuery(FILMS)
}

const PLANETS = gql`
  query ExampleQuery($filmId: ID) {
    film(filmID: $filmId) {
      title
      episodeID
      planetConnection {
        planets {
          name
          id
        }
      }

      starshipConnection {
        starships {
          name
        }
      }
    }
  }
`

export const useGetFilmPlanets = (options: QueryHookOptions) => {
  return useQuery(PLANETS, options)
}
