import { Link } from 'react-router-dom'
import Movie from '../../Components/Movie/Movie'
import MoviesWrapper from '../../Components/Movie/MoviesWrapper'
import { useGetFilms } from '../../CustomHooks/CustomHooks'
import './MainPage.scss'

const MainPage = () => {
  const { loading, error, data } = useGetFilms()

  if (loading) return <h1>Loading...</h1>

  if (error) return <>Error! ${error.message}</>

  return (
    <>
      <div>
        <h1>StarFlight.io</h1>
      </div>
      <MoviesWrapper>
        {data?.allFilms?.films?.map(
          (film: { title: string; episodeID: number }, index: number) => (
            <Link to={`/movie/${index + 1}`} key={index}>
              <Movie movie={film} />
            </Link>
          )
        )}
      </MoviesWrapper>
      <hr />
    </>
  )
}

export default MainPage
