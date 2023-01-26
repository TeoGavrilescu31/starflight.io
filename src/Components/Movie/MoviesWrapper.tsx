import { ReactNode } from 'react'
import './MoviesWrapper.scss'

interface MoviesWrapperInterface {
  children: ReactNode
}

const MoviesWrapper = ({ children }: MoviesWrapperInterface) => {
  return <div className="movies-wrapper">{children}</div>
}

export default MoviesWrapper
