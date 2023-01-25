import './Planet.scss'
import { Planets } from '../../Assets'

interface PlanetInterface {
  planet: { name: string; id: string }
}
const Planet = ({ planet }: PlanetInterface) => {
  const { name, id } = planet
  return (
    <div className="planet">
      {name}
      <span> {id}</span>
      <img
        className="tatooine"
        src={Planets.Tatooine}
        alt={name}
        draggable={false}
      />
    </div>
  )
}

export default Planet
