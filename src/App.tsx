import './App.scss'
import MainPage from './Pages/MainPage/MainPage'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import MoviePage from './Pages/MoviePage/MoviePage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/movie/:ID'} element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  )
}
