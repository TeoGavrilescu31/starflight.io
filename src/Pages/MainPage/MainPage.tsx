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
    <div className="main-page">
      <div>
        <h1>StarFlight.io</h1>
      </div>
      <MoviesWrapper>
        {data?.allFilms?.films?.map(
          (film: { title: string; episodeID: number }, index: number) => (
            <Link to={`/movie/${index + 1}`} key={index} draggable={false}>
              <Movie movie={film} />
            </Link>
          )
        )}
      </MoviesWrapper>
    </div>
  )
}

export default MainPage
